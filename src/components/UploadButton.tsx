"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"

const UploadButton = () => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    return (
        <Dialog open={isOpen} onOpenChange={(v:boolean) => {
            if (!v) 
                setIsOpen(v)
        }}>
            <DialogTrigger asChild onClick={() => setIsOpen(true)}>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
                Example
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton