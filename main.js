

function hash(text)
{
    var m=text.length;
    var value=0;
    var j=0;
    for(i=m-1;i>=0;i--)
    {
        value+=(text.charCodeAt(i))*Math.pow(m,j);// i need to change 
        j++;
    }
    return value;
}

function rabinKarp()
{
    var ComparisonCount=0;

    var text = document.getElementsByClassName("text")[0].value;
    var ptrn = document.getElementsByClassName("ptrn")[0].value;0
    var m=ptrn.length;
    var n=text.length;
    var flag="Not Found";
    var testWith=hash(ptrn)%31;
    var testValue=hash(text.substr(0,m))%31;
    ComparisonCount++;
    if(testValue==testWith)
    {
        ComparisonCount+=m;
        if(ptrn.localeCompare(text.substr(i-m,m)))
        {
            flag="Found ! Location : 0";
            document.getElementsByClassName("result")[0].style.opacity="100%";
            document.getElementsByClassName("result")[1].style.opacity="100%";
            document.getElementById("res").value=flag;
            document.getElementById("cmp").value="# Comparisons :  "+ComparisonCount;
            return;
        }
    }
    for (i=m;i<n;i++)
    {
        testValue-=((text.charCodeAt(i-m))*Math.pow(m,m-1))%31;
        testValue=testValue*m+(text.charCodeAt(i));
        testValue=testValue%31;
        ComparisonCount++;
        if(testValue==testWith)
        {
            ComparisonCount+=m;
            if(ptrn.localeCompare(text.substr(i-m,m)))
            {
                flag="Found ! Location : "+(i-m+1);
                document.getElementsByClassName("result")[0].style.opacity="100%";
                document.getElementsByClassName("result")[1].style.opacity="100%";
                document.getElementById("res").value=flag;
                document.getElementById("cmp").value="# Comparisons :  "+ComparisonCount;
                return;
            }
        }
    }
    document.getElementsByClassName("result")[0].style.opacity="100%";
    document.getElementsByClassName("result")[1].style.opacity="100%";
    document.getElementById("res").value=flag;
    document.getElementById("cmp").value="# Comparisons :  "+ComparisonCount;
    
}
