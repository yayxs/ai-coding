import { TypeTable } from "@/components/ui/type-table"

function TypeTableDemo() {
  return (
    <TypeTable
      type={{
        percentage: {
          description: "The percentage of scroll position to display the roll button",
          type: "number",
          default: "0.2"
        }
      }}
      className="min-w-[400px]"
    />
  )
}

export { TypeTableDemo } 