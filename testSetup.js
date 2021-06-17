import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

jest.setTimeout(10000);

Enzyme.configure({ adapter: new Adapter() });
