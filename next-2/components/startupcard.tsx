

export default function StartupCard({ post }: { post: StartupCardType }) {
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup-card_date">
                    {post._createdAt}
                </p>
            </div>
        </li>
    )
}