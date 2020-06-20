import React, { useMemo, useState } from 'react';
import useMedia from '../hooks/useMedia';
import classNames from "classnames"
import { AiFillCaretDown } from 'react-icons/ai';
import { Button } from './Button';
// import { Container } from './styles';

type AccordionItem = {
    id: any;
    logo: string;
    cover: string;
}


interface ExpandAccordionGridProps {
    items?: AccordionItem[];
}


const mock = Array(9).fill(1).map((_, i: number) => ({
    id: i,
    logo: "/img/logo.png",
    cover: "/img/site.jpg"
}) as AccordionItem)




const ExpandAccordionGrid: React.FC<ExpandAccordionGridProps> = ({ items = mock }) => {
    const columnCount = useMedia(
        ['(min-width: 1280px)', '(min-width: 1024px)', '(min-width: 768px)', '(min-width: 640px)'],
        [4, 4, 3, 2],
        2
    );
    const colSpan = useMemo(() => `col-span-${12 / columnCount}`, [columnCount])

    const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null)
    const handleSelect = (index: number) => {
        const selected = items[index];
        console.log(selected)
        if (selected?.id === selectedItem?.id)
            setSelectedItem(null)
        else
            setSelectedItem(selected)
    }

    const shouldShowExpand = (selected: typeof items[0]) => {
        const foundIndex = items.findIndex((v: typeof items[0]) => v?.id === selected?.id)
        const nextMultiple = foundIndex + (columnCount - foundIndex % columnCount);
        return nextMultiple - 1;
    }

    const Badge = ({ text }) => (

        <span className="inline-block rounded-full text-white bg-purple-500 px-2 py-1 text-xs font-bold mr-3 my-2">{text}</span>
    )

    const Expand = ({ item: { cover } }) => (
        <div className="p-4 col-span-12">  <div className="z-10 col-span-12 w-full bg-center bg-cover grid grid-cols-2 shadow-lg rounded-md" style={{ background: `url(${cover})` }}>
            <div className="col-span-2 sm:col-span-1">
                <img src={cover} className="object-cover object-center w-full h-full" />
            </div>
            <div className="col-span-2 sm:col-span-1 w-full bg-white p-4">
                <h2 className="text-xl font-bold">Global Hawk</h2>
                <p>Global Hawk is a platform for top level realtors to sell luxury homes with the lastest and most advanced 3D visualization tools</p>
                <div><Badge text="Frontend" /><Badge text="React" /><Badge text="API" /></div>
                <Button variant="secondary" className="w-full my-2" size="small">Go to website</Button>

            </div>

        </div></div>
        // <div className=" col-span-12 py-4">
        //     <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto bg-no-repeat bg-center bg-cover " style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80)" }}>
        //         <div>
        //             <div className="w-full" >
        //                 <img src={cover} className="object-cover object-center rounded-t-md w-full"></img>
        //             </div>
        //             <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
        //                 <span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
        //                 <span className="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
        //     </span>
        //             </div>
        //         </div>
        //         <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
        //             <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>
        //             <div className="pt-8 text-center">
        //                 <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )

    const SelectedBadge = () => {
        return (
            <div className="w-full flex items-center justify-center w-12 absolute bottom-0"
            //  style={{ background: "linear-gradient(0deg, rgba(51,51,51,0.05) 0%, rgba(255,255,255,0) 90%, rgba(255,255,255,0) 100%)" }}
            >
                <AiFillCaretDown size={12} color="#33333399" />
            </div>
        )
    }



    return <> <div className="grid grid-cols-12 col-gap-1 box-border">
        {items.map(({ id, logo }, i) => {
            return (
                <>
                    <div className={classNames("w-full h-32 bg-white p-2 flex items-center justify-center relative", {
                        [colSpan]: true,
                        "shadow-2xl": selectedItem?.id === id,
                    })} onClick={() => handleSelect(i)}>
                        <img src={logo} className="object-contain" />
                        {selectedItem?.id === id && <SelectedBadge />}
                    </div>
                    {selectedItem && shouldShowExpand(selectedItem) === i && <Expand item={selectedItem} />}
                </>
            )
        })}
    </div>
    </>;


}

export default ExpandAccordionGrid;