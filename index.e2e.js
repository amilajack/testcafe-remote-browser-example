import { Selector, ClientFunction } from 'testcafe';

fixture
    `example.com Page Tests`
    .page`https://example.com/`

const getPageUrl = ClientFunction(() => window.location.href)

test('it should load home page', async t => {
    await t
        .expect(Selector('p').visible)
        .ok()
        .expect(Selector('h1').visible)
        .ok()
})

test('it should get more information', async t => {
    await t
        .click(Selector('a').withExactText('More information...'))
        .expect(getPageUrl())
        .eql('https://www.iana.org/domains/reserved')
})