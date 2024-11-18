import { Drawer } from '@mui/material';

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
                <div style={{ width: 250, padding: '16px' }}>
                    <p>Hello, this is the Drawer content!</p>
                </div>
            </Drawer>
        </>
    );
}
export default Sidebar;
