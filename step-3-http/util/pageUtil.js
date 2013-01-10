function getHTMLWithTitle( title, hType, contents )
{
    if( !contents ) contents = '';
    if( !hType ) hType = 'h1';
    
    var html = '<HTML><head/><body><%h>%t</%h>%c</body></HTML>';
    
    return html.replace( /\%h/, hType ).replace( /\%t/, title ).replace( /\%c/, contents );
}

exports.getHTMLWithTitle = getHTMLWithTitle;