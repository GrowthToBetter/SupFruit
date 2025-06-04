'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from '@/lib/utils'
import { generateWhatsAppBookingURL } from './encodeMessage'
import { contact } from '../landing-page/footer'

export default function DaftarBeliCollapsible({className }: {className?: string}) {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root open={open}  onOpenChange={setOpen} className={cn("w-full max-w-md", className)}>
      <Collapsible.Trigger asChild>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-6 py-3 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 w-full flex justify-between items-center"
        >
          <span>Daftar atau Beli Sekarang</span>
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </Button>
      </Collapsible.Trigger>

      <Collapsible.Content className="mt-4 space-y-2">
        <Button asChild variant="outline" className="w-full justify-start">
          <Link href="/daftar">
            Daftar sebagai Supplier <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full justify-start">
          <Link href={generateWhatsAppBookingURL(contact)} target="_blank">
            Beli Buah Sekarang <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
