import r2wc from "@r2wc/react-to-web-component";
import { useEffect, useRef } from "react";
import TeacherTool from "./TeacherTool";
import widgetStyles from "../globals.css?inline";

const globalWithProcess = globalThis as any;

if (!globalWithProcess.process) {
  globalWithProcess.process = {
    env: { NODE_ENV: "production" },
  };
} else if (!globalWithProcess.process.env) {
  globalWithProcess.process.env = { NODE_ENV: "production" };
}

export interface TeacherToolWidgetProps {
  /** URL of LRU RAG assistant admin - i.e. https://admin.lrurag.dk/api/v1/chat */
  chatApi: string;
  /** The GUID of the assistant or the custom application id */
  chatAssistantId: string;
  /** Determines whether or not the teacher tool is visible */
  open?: boolean;
  /** Determines size on the screen */
  size?: "medium" | "large";
}

function TeacherToolWidgetRoot({
  chatApi,
  chatAssistantId,
  size,
  open,
}: TeacherToolWidgetProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootNode = rootRef.current?.getRootNode();
    if (!(rootNode instanceof ShadowRoot)) {
      return;
    }

    if (rootNode.querySelector("style[data-teacher-tool-widget-styles]")) {
      return;
    }

    const style = document.createElement("style");
    style.setAttribute("data-teacher-tool-widget-styles", "true");
    style.textContent = widgetStyles;
    rootNode.prepend(style);
  }, []);

  // useEffect(() => {
  //   const inner = rootRef.current?.firstElementChild as HTMLElement | null;
  //   if (!inner) return;

  //   let previouslyHidden = inner.classList.contains("hidden");

  //   const observer = new MutationObserver(() => {
  //     const isHidden = inner.classList.contains("hidden");
  //     if (isHidden !== previouslyHidden) {
  //       previouslyHidden = isHidden;
  //       const rootNode = rootRef.current?.getRootNode();
  //       const host = rootNode instanceof ShadowRoot ? rootNode.host : rootRef.current;
  //       if (host) {
  //         // Reflect internal state back to the host element's property
  //         // so the external project can read widget.open without tracking its own state
  //         (host as any).open = !isHidden;
  //       }
  //     }
  //   });

  //   observer.observe(inner, { attributes: true, attributeFilter: ["class"] });
  //   return () => observer.disconnect();
  // }, []);

  return (
    <div ref={rootRef}>
      <TeacherTool chatApi={chatApi} chatAssistantId={chatAssistantId} size={size} open={open} />
    </div>
  );
}

const TeacherToolWidget = r2wc(TeacherToolWidgetRoot, {
    props: {
      chatApi: "string",
      chatAssistantId: "string",
      size: "string",
      open: "boolean",
    },
    shadow: 'open',
});

customElements.define("teacher-tool-widget", TeacherToolWidget);