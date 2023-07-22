"use client";

import * as z from "zod";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { ScrollArea } from "./ui/scroll-area";

const formSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(11).max(11),
  address: z.string().min(3),
  birth: z.string().min(1),
  blood: z.string().min(1),
  district: z.string().min(1),
});

const districts = [
  // B
  { label: "Bagerhat", value: "Bagerhat" },
  { label: "Bandarban", value: "Bandarban" },
  { label: "Barguna", value: "Barguna" },
  { label: "Barishal", value: "Barishal" },
  { label: "Bhola", value: "Bhola" },
  { label: "Bogra", value: "Bogra" },
  { label: "Brahmanbaria", value: "Brahmanbaria" },
  // C
  { label: "Chandpur", value: "Chandpur" },
  { label: "Chattogram", value: "Chattogram" },
  { label: "Chuadanga", value: "Chuadanga" },
  { label: "Cox's Bazar", value: "Cox's Bazar" },
  // D
  { label: "Dhaka", value: "Dhaka" },
  { label: "Dinajpur", value: "Dinajpur" },
  // F
  { label: "Faridpur", value: "Faridpur" },
  { label: "Feni", value: "Feni" },
  // G
  { label: "Gaibandha", value: "Gaibandha" },
  { label: "Gazipur", value: "Gazipur" },
  { label: "Gopalganj", value: "Gopalganj" },
  // H
  { label: "Habiganj", value: "Habiganj" },
  // J
  { label: "Jamalpur", value: "Jamalpur" },
  { label: "Jashore", value: "Jashore" },
  { label: "Jamalpur", value: "Jamalpur" },
  { label: "Jashore", value: "Jashore" },
  { label: "Jhalokati", value: "Jhalokati" },
  { label: "Jhenaidah", value: "Jhenaidah" },
  { label: "Joypurhat", value: "Joypurhat" },
  // K
  { label: "Khagrachhari", value: "Khagrachhari" },
  { label: "Khulna", value: "Khulna" },
  { label: "Kishoreganj", value: "Kishoreganj" },
  { label: "Kurigram", value: "Kurigram" },
  { label: "Kushtia", value: "Kushtia" },
  // L
  { label: "Lakshmipur", value: "Lakshmipur" },
  { label: "Lalmonirhat", value: "Lalmonirhat" },
  // M
  { label: "Madaripur", value: "Madaripur" },
  { label: "Magura", value: "Magura" },
  { label: "Manikganj", value: "Manikganj" },
  { label: "Meherpur", value: "Meherpur" },
  { label: "Moulvibazar", value: "Moulvibazar" },
  { label: "Munshiganj", value: "Munshiganj" },
  { label: "Mymensingh", value: "Mymensingh" },
  // N
  { label: "Naogaon", value: "Naogaon" },
  { label: "Narail", value: "Narail" },
  { label: "Narayanganj", value: "Narayanganj" },
  { label: "Narsingdi", value: "Narsingdi" },
  { label: "Natore", value: "Natore" },
  { label: "Netrokona", value: "Netrokona" },
  { label: "Nilphamari", value: "Nilphamari" },
  { label: "Noakhali", value: "Noakhali" },
  // P
  { label: "Pabna", value: "Pabna" },
  { label: "Panchagarh", value: "Panchagarh" },
  { label: "Patuakhali", value: "Patuakhali" },
  { label: "Pirojpur", value: "Pirojpur" },
  // R
  { label: "Rajbari", value: "Rajbari" },
  { label: "Rajshahi", value: "Rajshahi" },
  { label: "Rangamati", value: "Rangamati" },
  { label: "Rangpur", value: "Rangpur" },
  // S
  { label: "Satkhira", value: "Satkhira" },
  { label: "Shariatpur", value: "Shariatpur" },
  { label: "Sherpur", value: "Sherpur" },
  { label: "Sirajganj", value: "Sirajganj" },
  { label: "Sunamganj", value: "Sunamganj" },
  { label: "Sylhet", value: "Sylhet" },
  // T
  { label: "Tangail", value: "Tangail" },
  { label: "Thakurgaon", value: "Thakurgaon" },

]

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
      birth: "",
      blood: "",
      district: "",
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
            Click Create profile when you are done
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
                    <Input disabled={loading} placeholder="Your Name" {...field} />
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
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select Blood Group"
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
                    <Input disabled={loading} placeholder="Mobile No" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birth"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="date" disabled={loading} placeholder="Date of birth" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="District"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <ScrollArea className="h-72">
                        {districts.map((district) => (
                          <React.Fragment key={district.value}>
                            <SelectItem value={district.value}>{district.label}</SelectItem>
                          </React.Fragment>
                        ))}
                      </ScrollArea>
                    </SelectContent>
                  </Select>
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
