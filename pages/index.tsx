import type { IUser } from '@interfaces';
import useSwr from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
    const { data, error, isLoading } = useSwr<IUser[]>('/api/users', fetcher);

    if (error) return <div>Failed to load users</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;

    return (
        <ul>
            {data.map((user) => (
                <li key={user._id}>
                    <Link href="/user/[id]" as={`/user/${user._id}`}>
                        {user.name ?? `User ${user._id}`}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
