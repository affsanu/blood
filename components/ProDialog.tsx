"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const formSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(11).max(11),
  address: z.string().min(3),
  nid: z.string().min(10).max(17),
  blood: z.string().min(1).max(3),
});

export default function ProDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/user");
        setIsOpen(res.data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchProfile();
  }, [isOpen]);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      nid: "",
      blood: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      await axios.post("/api/user", values);

      window.location.assign("/");
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make profile</DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={loading} placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="blood"
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger id="blood">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Blood group"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ap">A+ (Positive)</SelectItem>
                      <SelectItem value="an">A- (Negative)</SelectItem>
                      <SelectItem value="abp">AB+ (Positive)</SelectItem>
                      <SelectItem value="abn">AB- (Negative)</SelectItem>
                      <SelectItem value="bp">B+ (Positive)</SelectItem>
                      <SelectItem value="bn">B- (Negative)</SelectItem>
                      <SelectItem value="op">O+ (Positive)</SelectItem>
                      <SelectItem value="on">O- (Negative)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={loading} placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nid"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={loading} placeholder="NID number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={loading} placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
              <Button type="submit" disabled={loading}>
                <Loader2 className={`${loading ? 'flex' : 'hidden'} mr-2 h-4 w-4 animate-spin`} />
                Create profile
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
