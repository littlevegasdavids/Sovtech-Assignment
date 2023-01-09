interface BoxProps{
    title: string;
    content: string,
    image: string, 
    colour: string
}

export default function WhoAmIBox({title, content, image, colour}: BoxProps) {
    let box_class = "card w-full md:w-3/4 lg:w-2/4 shadow-lg text-primary-content " + colour
    return (
        <div className={box_class} id="box">
            <div className="avatar grid justify-items-center pt-3">
                <div className="rounded-full w-48 outline outline-2 shadow-lg">
                    <img src={image} />
                </div>
            </div>
            <div className="card-body text-center">
                <p className="font-bold text-2xl">{title}</p>
                <p>
                {content}
                </p>
            </div>
        </div>
    )
}