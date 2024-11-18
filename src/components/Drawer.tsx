import { Drawer } from '@mui/material';
import DrawerList from './DrawerList'

interface SidebarProps {
    variant: 'temporary' | 'permanent';
}

const Sidebar: React.FC<SidebarProps> = ({ variant }) => {
    return (
        <>
            <Drawer
                anchor="left"
                open={true}
                variant={variant}
            >
                <div style={{ width: 200, padding: '16px' }}>
                    <p>Hello, this is the Drawer content!</p>
                </div>
                <DrawerList/>
            </Drawer>
        </>
    );
}
export default Sidebar;
