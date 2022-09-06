import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NFT__DATA } from '../../../../assets/data/data';
import NftCard from '../Nft-card/NftCard';

import './trending.css';

const Trending = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <div className='trending__title'>Trending</div>
          </Col>

          {NFT__DATA.slice(0, 8).map((item) => (
            <Col lg='3' md='4' sm='6' key={item.id} className='mb-4'>
              <NftCard
                id={item.id}
                title={item.title}
                currentBid={item.currentBid}
                creatorImg={item.creatorImg}
                imgUrl={item.imgUrl}
                creator={item.creator}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
