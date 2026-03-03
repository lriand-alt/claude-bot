import r2wc from "@r2wc/react-to-web-component";
import TeacherTool from "./TeacherTool";
import { LanguageProvider } from "../contexts/LanguageContext";

const globalWithProcess = globalThis as any;

if (!globalWithProcess.process) {
  globalWithProcess.process = {
    env: { NODE_ENV: "production" },
  };
} else if (!globalWithProcess.process.env) {
  globalWithProcess.process.env = { NODE_ENV: "production" };
}

interface TeacherToolWidgetProps {
  chatApi: string;
  chatAssistantId: string;
}

function TeacherToolWidgetRoot({
  chatApi,
  chatAssistantId,
}: TeacherToolWidgetProps) {
  return (
    <LanguageProvider>
      <TeacherTool chatApi={chatApi} chatAssistantId={chatAssistantId} />
    </LanguageProvider>
  );
}

const TeacherToolWidget = r2wc(TeacherToolWidgetRoot, {
    props: {
      chatApi: "string",
      chatAssistantId: "string",
    },
    shadow: 'open',
});

customElements.define("teacher-tool-widget", TeacherToolWidget);