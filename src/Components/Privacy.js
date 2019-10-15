import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import FullLogo from './FullLogo';

export default class Privacy extends Component {
    render() {
        return (
            <Container style={{textAlign: 'center', fontFamily: 'Open Sans'}}>
                <div style={{marginRight: '25px'}}>
                    <FullLogo />
                </div>

                <h1 style={{color: '#444'}}>Privacy Policy</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at lobortis massa. Integer finibus dolor mauris, non elementum libero pharetra vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut efficitur orci. Donec aliquam ex a justo lobortis iaculis. Quisque sit amet dui commodo, volutpat nulla ut, lacinia felis. Fusce sit amet massa lectus. Maecenas id nulla urna. In vehicula elit eget congue sodales. In molestie semper enim non suscipit. Sed placerat eu metus a tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras turpis magna, blandit vel metus hendrerit, consectetur feugiat augue. Aenean sodales tortor eu dolor iaculis, non efficitur urna lacinia. Cras sed augue id leo tincidunt fringilla id vel purus.</p>
                <p>
                Praesent in porttitor odio. Fusce quam diam, lobortis et turpis vel, luctus consequat purus. Aliquam erat volutpat. Aliquam dui libero, accumsan quis nisl nec, maximus aliquam sem. Aliquam eget nibh condimentum, lobortis ipsum et, iaculis velit. Fusce vitae volutpat dolor, id elementum ex. Vestibulum egestas lacus vel nisl gravida, non faucibus risus scelerisque. Etiam eget lectus in augue aliquam ultricies. Nunc vel lectus gravida, dignissim magna sit amet, tincidunt ante. Aenean pulvinar est elit, non consectetur purus commodo in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                
                <p>
                Phasellus sit amet nibh tempor, pharetra lectus ac, laoreet ante. Proin rutrum mauris id gravida dapibus. Duis massa eros, ullamcorper a diam non, dapibus posuere libero. Vivamus porta nulla bibendum, pellentesque odio at, maximus justo. Suspendisse dapibus ullamcorper ex, quis efficitur libero luctus ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo leo sit amet interdum rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet neque in lectus interdum dictum eu ut felis. Sed placerat tristique massa tincidunt rutrum.
                </p>
                

                <p>
                Sed laoreet eros quis erat pharetra lacinia. Ut eget erat velit. Nullam finibus orci nec bibendum luctus. Nunc tincidunt posuere ligula non commodo. Sed et lobortis nisi. Etiam dictum scelerisque tellus ac interdum. Proin faucibus ex lorem, non tristique orci posuere quis. Ut finibus sollicitudin viverra.
                </p>

                <br />
                <Link href={'/'} style={{fontSize: '24px', fontWeight: 'bold', color: '#444'}}>
                    Back to Search
                </Link>
                

            </Container>
        )
    }
}
