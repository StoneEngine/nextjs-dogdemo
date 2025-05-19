import { ThemeProvider } from "./theme-povider";
import { Toaster } from "@/components/ui/sonner";

const Poviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
};
export default Poviders;
