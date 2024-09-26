import * as React from "react"

import { Link } from "react-router-dom"

import { Button } from "./ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface CardProps{
    title:string;
    cardContent:string;
    buttonContent:string;
    buttonURL : string

}

export function CardWithForm({title, cardContent, buttonContent, buttonURL} : CardProps) {
  return (
    <Card className="dark p-6 w-72 md:m-4" >
  <CardHeader>
    <CardTitle className="text-xl">{title}</CardTitle>
    <CardDescription>{cardContent}</CardDescription>
  </CardHeader>
  <CardContent>
    <Link to={buttonURL}>
    <Button>{buttonContent}</Button>
    </Link>
  </CardContent>
  {/* <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
</Card>

  )
}
