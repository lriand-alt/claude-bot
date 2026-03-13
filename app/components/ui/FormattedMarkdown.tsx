import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeExternalLinks from "rehype-external-links";
import supersub from "remark-supersub";
import superscriptNumberingHandlerPlugin from "@/plugins/super-script-numbering-handler-plugin";

const FormattedMarkdown = ({ children }: { children: string }) => {
  return (
    <Markdown
        rehypePlugins={[
            [
            rehypeExternalLinks,
            {
                target: "_blank",
                rel: ["noopener", "noreferrer"],
            },
            ],
            superscriptNumberingHandlerPlugin,
        ]}
        remarkPlugins={[remarkGfm, supersub, remarkBreaks]}
        components={{
            ol: ({ children }) => <ol className="list-decimal list-outside pl-5 space-y-1">{children}</ol>,
            ul: ({ children }) => <ul className="list-disc list-outside pl-5 space-y-1">{children}</ul>,
            li: ({ children }) => <li className="pl-1 py-1.5">{children}</li>,
            h1: ({ children }) => <h1 className="text-2xl font-bold mt-4 mb-2">{children}</h1>,
            h2: ({ children }) => <h2 className="text-xl font-bold mt-3 mb-2">{children}</h2>,
            h3: ({ children }) => <h3 className="text-lg font-semibold mt-2 mb-1">{children}</h3>,
            h4: ({ children }) => <h4 className="text-md font-semibold mt-2 mb-1">{children}</h4>,
            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
        }}
    >
        {children}
    </Markdown>
  )
}

export default FormattedMarkdown;