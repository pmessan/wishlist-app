import Image from 'next/image'
import Button, {ReserveButtonExtended} from './Button'
export default function Card () {
    return(
        <div className="card" style={{width: '22rem', borderRadius:'0.5rem'}}>
            <div className="card-body relative">
                <div className="grid grid-cols-3 justify-between">
                    <Image src="/img/gift.jpeg" alt="img" height="75" width="75" className="rounded col-span-1"/>
                    <div className="flex flex-col justify-center col-span-2">
                        <h1 className="text-center text-xl font-bold">Name of Item</h1>
                    </div>
                </div>
                <div>
                <p className="card-text py-6">Some description of the item.</p>
                <a href="#" className="card-link text-purple-600">View Item &gt;</a>
                </div>
                <div className="flex justify-end absolute bottom-2.5 right-2.5 space-x-2.5">
                {/* <Button /> */}
                <ReserveButtonExtended />
                </div>
                <br/>
            </div>
        </div>
    )
}