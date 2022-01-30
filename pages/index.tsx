import styled from 'styled-components';
import Image from 'next/image';
import { PopularityFilter, TicketsList } from '@app/features/tickets-list/ui';
import { theme } from '@app/assets';
import { useGate } from 'effector-react';
import { TicketsGate } from '@app/modules/Ticket/model';
import { Companies, Stops } from '@app/features/tickets-list/ui/filters';

const Index = () => {
  useGate(TicketsGate);

  return (
    <Container>
      <LogoContainer>
        <Image src="/icons/logo.svg" width={82} height={89} alt="Logo" />
      </LogoContainer>
      <Main>
        <Section>
          <Stops />
          <Companies />
        </Section>
        <Section>
          <PopularityFilter />
          <TicketsList />
        </Section>
      </Main>
    </Container>
  );
};

export default Index;

// Layout
const Container = styled.main`
  display: flex;
  flex-direction: column;

  margin-bottom: ${theme.spacePx * 5}px;
`;

const LogoContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 160px;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 232px 1fr;
  column-gap: ${theme.spacePx * 2}px;
`;

const Section = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  row-gap: ${theme.spacePx * 2}px;
`;
