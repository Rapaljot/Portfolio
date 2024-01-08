let t1 = gsap.timeline();
t1
    .from("#fourthChild",
        {
            opacity: 0,
            duration: 0.2,
            onStart: function () {
                $('#fourthChild').textillate({
                    in: {
                        effect: 'fadeInUp',
                        callback: function () {
                            $('#fourthChild').textillate('out');
                        }
                    },
                    out: { effect: 'fadeOutUp' }
                });
            }
        })
    .from("#thirdChild", {
        opacity: 0,
        duration: 0.2,
        delay: 0.85,

        onStart: function () {
            $('#thirdChild').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#thirdChild').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from("#secondChild", {
        opacity: 0,
        duration: 0.2,
        delay: 0.85,
        onStart: function () {
            $('#secondChild').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#secondChild').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from("#firstChild", {
        opacity: 0,
        duration: 0.2,
        delay: 0.85,

        onStart: function () {
            $('#firstChild').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#firstChild').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .to("#container", {
        top: "-100%",
        delay: 1,
        duration: 1.2,
        ease: "Power4.easeOut"
    })
gsap.to("#mainSection", {
    height: "fit-content",
    duration: 0,
    delay: 4.5
})
gsap.to(".nav", {
    height: "10vh",
    duration: 0,
    delay: 4.5
})





