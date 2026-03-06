import r2wc from "@r2wc/react-to-web-component";
import { useEffect, useRef } from "react";
import TeacherTool from "./TeacherTool";
import { LanguageProvider } from "../contexts/LanguageContext";
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
  size?: "small" | "medium" | "large";
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

  return (
    <div ref={rootRef}>
      <LanguageProvider>
        <TeacherTool chatApi={chatApi} chatAssistantId={chatAssistantId} size={size} open={open} />
      </LanguageProvider>
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