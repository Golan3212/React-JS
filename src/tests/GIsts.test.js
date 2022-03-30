const { render } = require("@testing-library/react");
import ForTest from '../utils/ForTest';



describe('test jest', ()=> {
    it('for snapshot', ()=>{
        const view = render(<ForTest />);
        expect(view).toMatchSnapshot();
    });
});