"use client"

import Link from "next/link"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
export function Header(){
    return (
        <header 
        className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white"
        >
        <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-zinc-900">Odontopro<span className="text-emerald-500">PRO</span></Link>

            <nav className="hidden md:flex items-center">
            <a href="#">Profissionais</a>
            </nav>

            <Sheet>
                <SheetTrigger asChild className="md:hidden" >
                    <Button><Menu className="w-6 h-6 " /></Button>
                </SheetTrigger>
            </Sheet>

    

        </div>

        
        </header>
    )
}