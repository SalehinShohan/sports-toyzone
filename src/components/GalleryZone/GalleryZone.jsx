import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const GalleryZone = () => {
    const [galleries, setGalleries] = useState([]);
    useEffect(()=> {
        fetch('gallery.json')
        .then(res=> res.json())
        .then(data => {
            setGalleries(data);
        })
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-5xl text-center font-bold mt-10">Gallery ToyZone</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-clos-2 gap-6">
                {
                    galleries.map(gallery => <GalleryCard
                        key={gallery._id}
                        gallery={gallery}
                    ></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default GalleryZone;