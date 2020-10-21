import React, { useState, useRef, useEffect } from 'react';
import header from './style';

export default function Header({ count, total, currentPage, totalPages }) {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    }
  }, []);

  return (
    <div
      css={header}
      className={`sticky-header ${isSticky ? 'sticky' : ''}`}
      ref={ref}
    >
      <div className="sticky-header__inner-wrapper">
        <h1>Amy's Appliances</h1>

        <div className="product-count">
          <div className="product-count__left">
            {`${count} of ${total} items showing`}
          </div>
          <div className="product-count__right">
            {`Page ${currentPage} of ${totalPages}`}
          </div>
        </div>
        
      </div>
    </div>
  )
}
