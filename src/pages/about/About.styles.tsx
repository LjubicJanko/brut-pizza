import styled from 'styled-components';

export const AboutPageContainer = styled.div`
  padding-top: 75px;
  background-color: var(--color-background-2);
  color: var(--color-white);

  .page-content {
    height: 100%;
    padding: 16px;
    background-color: var(--color-background-2);

    display: flex;
    flex-direction: column;
    color: var(--color-white);

    .address {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .address-label {
        font-size: 22px;
      }
      .address-name {
        font-size: 18px;
      }
    }

    .contact {
      display: flex;
      flex-direction: column;
      margin-top: 32px;
      margin-bottom: 32px;
      gap: 16px;

      .look-on-map {
        width: 100%;
        display: flex;
        text-align: left;
        align-items: center;
        color: #1976d2;

        &__button {
          font-size: 16px;
          padding: 0;
          gap: 8px;
        }
      }

      .instagram-button {
        text-align: left;
        justify-content: left;
        padding: 0;
        color: #1976d2;
        p {
          margin: 0;
          margin-left: 8px;
          font-size: 16px;
        }
      }
    }

    .business-hours {
      margin-top: 32px;
      margin-bottom: 32px;
      .business-hours-row {
        display: grid;
        grid-template-columns: min-content 1fr;
        margin-bottom: 8px;
        text-align: left;
      }

      .business-hours-day {
        font-weight: bold;
      }

      .business-hours-time {
        text-align: right;
      }
    }
  }
`;
