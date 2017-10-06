import * as React from 'react';
import { Button, ButtonType } from 'office-ui-fabric-react';
import { Header } from './header';
import { HeroList, HeroListItem } from './hero-list';

export interface AppProps {
    title: string;
}

export interface AppState {
    listItems: HeroListItem[];
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            listItems: []
        };
    }

    componentDidMount() {
        this.setState({
            listItems: [
                {
                    icon: 'Ribbon',
                    primaryText: 'Achieve more with Office integration'
                },
                {
                    icon: 'Unlock',
                    primaryText: 'Unlock features and functionality'
                },
                {
                    icon: 'Design',
                    primaryText: 'Create and visualize like a pro'
                }
            ]
        });
    }

    click = async () => {
        
        await Excel.run(async (context) => {
            /**
             * Insert your Excel code here
             */
            await context.sync();
        });
        
    }

    render() {
        return (
            <div className='ms-welcome'>
                <Header logo='assets/logo-filled.png' title={this.props.title} message='Welcome' />
                <HeroList message='Discover what Futai ERP can do for you today!' items={this.state.listItems}>
                    <p className='ms-font-l'>Modify the source files, then click <b>Run</b>.</p>
                    <Button className='ms-welcome__action' buttonType={ButtonType.hero} icon='ChevronRight' onClick={this.click}>Run</Button>
                </HeroList>
            </div>
        );
    };
};
