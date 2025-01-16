import { TypeTable } from "@/components/ui/type-table"

function TypeTableDemo() {
  return (
    <TypeTable
      type={{
        percentage: {
          description: "The percentage of scroll position to display the roll button",
          type: "number",
        }
      }}
      className="min-w-[400px]"
    />
  )
}

export { TypeTableDemo } 