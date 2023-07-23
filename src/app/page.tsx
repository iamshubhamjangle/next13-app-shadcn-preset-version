import { ModeToggle } from "@/components/custom/modeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="secondary" className="animate-in zoom-in duration-500">
        Secondary
      </Button>
      <Button variant="outline">Outline</Button>
      <ModeToggle />
    </div>
  );
}
