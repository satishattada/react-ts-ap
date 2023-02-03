
import { withParamsAndNavigate } from "../../routes/with-params-navigate";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';
const Layout = (props: any) => {

  const { accessToken, userData } = props;
  
  const navigate = () => {
    props.navigate('/login')
  }
  return (
    <div className="product">
      Layout
      <button onClick={navigate}>login</button>
    </div>
  );
};

export const mapDispatchToProps = (dispatch: any) => ({
  appAction: bindActionCreators(appAction, dispatch),
});

export const mapStateToProps = (state: any) => {
  return {
    accessToken: state.user.accessToken,
    userData:state.user.userData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withParamsAndNavigate(Layout));
export { Layout }
