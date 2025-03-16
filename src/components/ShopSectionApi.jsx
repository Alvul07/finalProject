import React from 'react'
import SecondApi from './SecondApi';
import ErrorBoundary from './ErrorBoundary';
import NavShop from './NavShop';

const ShopSectionApi = () => {
  return (
    <section>
            <NavShop/>
            <div>
                <ErrorBoundary>
                    <SecondApi />
                </ErrorBoundary>
            </div>

        </section>
    )
}

export default ShopSectionApi;