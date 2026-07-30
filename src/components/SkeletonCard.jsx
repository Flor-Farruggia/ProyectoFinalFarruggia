function SkeletonCard() {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card rounded-4 h-100 p-3">
                <div className="skeleton skeleton-img rounded-4"></div>
                <div className="card-body">
                    <div className="skeleton skeleton-title mb-3"></div>
                    <div className="skeleton skeleton-text mb-2"></div>
                    <div className="skeleton skeleton-text w-50 mb-4"></div>
                    <div className="skeleton skeleton-button"></div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonCard;