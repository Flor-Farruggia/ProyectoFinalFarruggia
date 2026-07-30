import SkeletonCard from "./SkeletonCard";

function SkeletonList() {
    return (
        <div className="row g-4">
            {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
}

export default SkeletonList;