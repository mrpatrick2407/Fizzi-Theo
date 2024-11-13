import { LinkField } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import clsx from "clsx"


type Props = {
    buttonLink: LinkField,
    buttonText: string|null,
    className?: string,
}

const Button = (props: Props) => {
  return (
    <PrismicNextLink className={clsx('md:text-2xl text-xl text-white rounded-xl text-center bg-orange-600 py-5 px-4 font-bold uppercase transition-colors hover:bg-orange-700 duration-150',props.className)} field={props.buttonLink}>
        {props.buttonText}
    </PrismicNextLink>
  )
}
export default Button