
import { withParamsAndNavigate } from "../../routes/with-params-navigate";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';
import { useState, useEffect } from 'react';

const Layout = (props: any) => {
  const { 
    usersData,
    appAction } = props;
  const [users, setUsers] = useState([]);

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    appAction.getUsers().then(() => {
      setUsers(usersData);
    });
  }, []);

  console.log('{{{{{{users}}}}}}');
  console.log(users);

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
    accessToken: state.users.accessToken,
    usersData:state.users.usersData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withParamsAndNavigate(Layout));
export { Layout }
