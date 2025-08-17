import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Copy, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  executable?: boolean;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'html', 
  title, 
  executable = false,
  className = "" 
}) => {
  const [isExecuted, setIsExecuted] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
        variant: "default",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually",
        variant: "destructive",
      });
    }
  };

  const executeCode = () => {
    setIsExecuted(!isExecuted);
    toast({
      title: isExecuted ? "Preview Hidden" : "Code Executed!",
      description: isExecuted ? "HTML preview is now hidden" : "Check the preview below",
      variant: "default",
    });
  };

  const highlightHTML = (htmlCode: string) => {
    return htmlCode; // No syntax highlighting for cleaner code display
  };

  const escapeHtml = (unsafe: string) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  return (
    <Card className={`bg-card shadow-medium border-border ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-border bg-muted/30">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
      )}
      
      <div className="relative">
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="bg-card/80 hover:bg-accent border-border"
          >
            <Copy className="h-4 w-4" />
          </Button>
          {executable && (
            <Button
              variant="outline"
              size="sm"
              onClick={executeCode}
              className="bg-card/80 hover:bg-accent border-border"
            >
              <Play className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="bg-code-bg text-code-foreground p-6 font-mono text-sm overflow-x-auto">
          <pre 
            className="text-code-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: highlightHTML(escapeHtml(code)) 
            }}
          />
        </div>
      </div>

      {executable && isExecuted && (
        <div className="border-t border-border">
          <div className="p-4 bg-accent/30">
            <h4 className="text-sm font-medium text-foreground mb-3">Preview:</h4>
            <div 
              className="bg-background border border-border rounded-lg p-4 min-h-[100px]"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default CodeBlock;