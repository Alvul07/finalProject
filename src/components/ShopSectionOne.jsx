import React from 'react'
import Api from './Api';
import ErrorBoundary from './ErrorBoundary';
import NavShop from './NavShop';

const ShopSectionOne = () => {

    return (
        <section>
                <NavShop/>
            <div>
                <ErrorBoundary>
                    <Api />
                </ErrorBoundary>
            </div>

        </section>
    )
}

export default ShopSectionOne;