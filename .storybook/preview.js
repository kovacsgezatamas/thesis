import { MainContainer } from './styled';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <MainContainer>
      <Story />
    </MainContainer>
  ),
];
