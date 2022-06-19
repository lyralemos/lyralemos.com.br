import { useState, useEffect } from 'react';

import posts from '@/api/posts'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await posts.list()
            if (response.ok) {
                setData(response.data.posts)
            }
        }

        fetchData()

    }, [])
    
    return (
        <div className='posts'>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>

                    <div className="body">
                        {item.body}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;