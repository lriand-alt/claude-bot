import r2wc from "@r2wc/react-to-web-component";
import TeacherTool from "./TeacherTool";

const TeacherToolWidget = r2wc(TeacherTool, {
    props: {
      chatApi: "string",
      chatAssistantId: "string",
    },
    shadow: 'open',
});

customElements.define("teacher-tool-widget", TeacherToolWidget);