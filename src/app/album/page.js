import Image from 'next/image';
import horidas from '@/assets/horidas.jpg'

const AlbumPage = () => {
    return (
        <div>
            <h2>Using Image component</h2>
            <Image src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo"
            width={500}
            height={500}
            />
            <h2>my Image component</h2>
            <Image src={horidas}alt="logo"
            width={500}
            height={500}
            />
            <h2>Using Image component</h2>
            <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo"
            width={"500px"}
            height={"px"}
            />
        </div>
    );
};

export default AlbumPage;