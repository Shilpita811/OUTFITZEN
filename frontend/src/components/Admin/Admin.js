import React from 'react'
import "./Admin.css"

const Admin = () => {
    return (
        <>
            <div class="wrapper">
                <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">

                    <div class="logo">
                        <a href="http://www.creative-tim.com" class="simple-text logo-normal">
                            Tubagora
                        </a>
                    </div>
                    <div class="sidebar-wrapper">
                        <ul class="nav2">
                            <li class="nav2-item2 activation ">
                                <a class="nav2-link2" href="../examples/dashboard.html">
                                    <i class="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li class="nav2-item2 ">
                                <a class="nav2-link2" href="../examples/user.html">
                                    <i class="material-icons">person</i>
                                    <p>User Profile</p>
                                </a>
                            </li>
                            <li class="nav2-item2 ">
                                <a class="nav2-link2" href="../examples/table.html">
                                    <i class="material-icons">content_paste</i>
                                    <p>Table List</p>
                                </a>
                            </li>
                            <li class="nav2-item2 ">
                                <a class="nav2-link2" href="../examples/typography.html">
                                    <i class="material-icons">library_books</i>
                                    <p>Typography</p>
                                </a>
                            </li>
                            <li class="nav2-item2 ">
                                <a class="nav2-link2" href="../examples/icons.html">
                                    <i class="material-icons">bubble_chart</i>
                                    <p>Icons</p>
                                </a>
                            </li>
                            <li class="nav2-item2 ">
                                <a class="nav2-link2" href="../examples/maps.html">
                                    <i class="material-icons">location_ons</i>
                                    <p>Maps</p>
                                </a>
                            </li>
                            <li class="nav2-item2 ">
                                <a class="nav2-link2" href="../examples/notifications.html">
                                    <i class="material-icons">notifications</i>
                                    <p>Notifications</p>
                                </a>
                            </li>
                            <li class="nav2-item2 activation-pro">
                                <a class="nav2-link2" href="upgrade.html">
                                    <i class="material-icons">unarchive</i>
                                    <p>Upgrade to PRO</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="main-panel">

                    {/* <nav2 class="nav2bar2 nav2bar2-expand-lg nav2bar2-transparent  nav2bar2-absolute fixed-top">
                        <div class="container-fluid2">
                            <div class="nav2bar2-wrapper">
                                <a class="nav2bar2-brand" href="#pablo">Material Dashboard</a>
                            </div>
                            <button class="nav2bar2-toggler" type="button" data-toggle="collapse" data-target="#nav2igation"
                                aria-controls="nav2igation-index" aria-expanded="false" aria-label="Toggle nav2igation">
                                <span class="sr-only">Toggle nav2igation</span>
                                <span class="nav2bar2-toggler-icon icon-bar"></span>
                                <span class="nav2bar2-toggler-icon icon-bar"></span>
                                <span class="nav2bar2-toggler-icon icon-bar"></span>
                            </button>
                            <div class="collapse nav2bar2-collapse justify-content-end" id="nav2igation">
                                <form class="nav2bar2-form">
                                    <div class="input-group2 no-border">
                                        <input type="text" value="" class="nav2bar2" placeholder="Search..." />
                                        <button type="submit" class="btn2 btn2-white btn2-round btn2-just-icon">
                                            <i class="material-icons">search</i>
                                            <div class="ripple-container"></div>
                                        </button>
                                    </div>
                                </form>
                                <ul class="nav2bar2-nav2">
                                    <li class="nav2-item2">
                                        <a class="nav2-link2" href="#pablo">
                                            <i class="material-icons">dashboard</i>
                                            <p>
                                                <span class="d-lg-none d-md-block">Stats</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li class="nav2-item2 dropdown">
                                        <a class="nav2-link2" href="http://example.com" id="nav2bar2DropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="material-icons">notifications</i>
                                            <span class="notification">5</span>
                                            <p>
                                                <span class="d-lg-none d-md-block">Some Actions</span>
                                            </p>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav2bar2DropdownMenuLink">
                                            <a class="dropdown-item" href="#">Mike John responded to your email</a>
                                            <a class="dropdown-item" href="#">You have 5 new tasks</a>
                                            <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                                            <a class="dropdown-item" href="#">Another Notification</a>
                                            <a class="dropdown-item" href="#">Another One</a>
                                        </div>
                                    </li>
                                    <li class="nav2-item2">
                                        <a class="nav2-link2" href="#pablo">
                                            <i class="material-icons">person</i>
                                            <p>
                                                <span class="d-lg-none d-md-block">Account</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li class="nav2-item2">
                                        <nav2 class="mdl-nav2igation mdl-layout--large-screen-only">

                                            <script src="https://apis.google.com/js/platform.js" async defer></script>
                                            <meta name="google-signin-client_id"
                                                content="235462070738-rn7ap9699sfmd7vv1tddskea43obhf6h.apps.googleusercontent.com" />
                                            <div class="g-signin2" data-onsuccess="onSignIn"></div>

                                        </nav2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav2> */}

                    <div class="content">
                        <div class="container-fluid2">
                            <div class="row2">
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-header card-header-warning card-header-icon">
                                            <div class="card-icon">
                                                <i class="material-icons">content_copy</i>
                                            </div>
                                            <p class="card-category">Used Space</p>
                                            <h3 class="card-title">49/50
                                                <small>GB</small>
                                            </h3>
                                        </div>
                                        <div class="card-footer2">
                                            <div class="stats">
                                                <i class="material-icons text-danger">warning</i>
                                                <a href="#pablo">Get More Space...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-header card-header-success card-header-icon">
                                            <div class="card-icon">
                                                <i class="material-icons">store</i>
                                            </div>
                                            <p class="card-category">Revenue</p>
                                            <h3 class="card-title">$34,245</h3>
                                        </div>
                                        <div class="card-footer2">
                                            <div class="stats">
                                                <i class="material-icons">date_range</i> Last 24 Hours
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-header card-header-danger card-header-icon">
                                            <div class="card-icon">
                                                <i class="material-icons">info_outline</i>
                                            </div>
                                            <p class="card-category">Fixed Issues</p>
                                            <h3 class="card-title">75</h3>
                                        </div>
                                        <div class="card-footer2">
                                            <div class="stats">
                                                <i class="material-icons">local_offer</i> Tracked from Github
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="card card-stats">
                                        <div class="card-header card-header-info card-header-icon">
                                            <div class="card-icon">
                                                <i class="fa fa-twitter"></i>
                                            </div>
                                            <p class="card-category">Followers</p>
                                            <h3 class="card-title">+245</h3>
                                        </div>
                                        <div class="card-footer2">
                                            <div class="stats">
                                                <i class="material-icons">update</i> Just Updated
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row2">
                                <div class="col-md-4">
                                    <div class="card card-chart">
                                        <div class="card-header card-header-success">
                                            {/* <div class="ct-chart" id="dailySalesChart"><svg
                                                xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%"
                                                height="100%" class="ct-chart-line" style="width: 100%; height: 100%;">
                                                <g class="ct-grids">
                                                    <line x1="40" x2="40" y1="0" y2="120" class="ct-grid ct-horizontal">
                                                    </line>
                                                    <line x1="98.23660714285714" x2="98.23660714285714" y1="0" y2="120"
                                                        class="ct-grid ct-horizontal"></line>
                                                    <line x1="156.47321428571428" x2="156.47321428571428" y1="0" y2="120"
                                                        class="ct-grid ct-horizontal"></line>
                                                    <line x1="214.70982142857144" x2="214.70982142857144" y1="0" y2="120"
                                                        class="ct-grid ct-horizontal"></line>
                                                    <line x1="272.94642857142856" x2="272.94642857142856" y1="0" y2="120"
                                                        class="ct-grid ct-horizontal"></line>
                                                    <line x1="331.1830357142857" x2="331.1830357142857" y1="0" y2="120"
                                                        class="ct-grid ct-horizontal"></line>
                                                    <line x1="389.4196428571429" x2="389.4196428571429" y1="0" y2="120"
                                                        class="ct-grid ct-horizontal"></line>
                                                    <line y1="120" y2="120" x1="40" x2="447.65625"
                                                        class="ct-grid ct-vertical"></line>
                                                    <line y1="96" y2="96" x1="40" x2="447.65625"
                                                        class="ct-grid ct-vertical"></line>
                                                    <line y1="72" y2="72" x1="40" x2="447.65625"
                                                        class="ct-grid ct-vertical"></line>
                                                    <line y1="48" y2="48" x1="40" x2="447.65625"
                                                        class="ct-grid ct-vertical"></line>
                                                    <line y1="24" y2="24" x1="40" x2="447.65625"
                                                        class="ct-grid ct-vertical"></line>
                                                    <line y1="0" y2="0" x1="40" x2="447.65625" class="ct-grid ct-vertical">
                                                    </line>
                                                </g>
                                                <g>
                                                    <g class="ct-series ct-series-a">
                                                        <path
                                                            d="M40,91.2C98.237,79.2,98.237,79.2,98.237,79.2C156.473,103.2,156.473,103.2,156.473,103.2C214.71,79.2,214.71,79.2,214.71,79.2C272.946,64.8,272.946,64.8,272.946,64.8C331.183,76.8,331.183,76.8,331.183,76.8C389.42,28.8,389.42,28.8,389.42,28.8"
                                                            class="ct-line"></path>
                                                        <line x1="40" y1="91.2" x2="40.01" y2="91.2" class="ct-point"
                                                            ct:value="12"></line>
                                                        <line x1="98.23660714285714" y1="79.2" x2="98.24660714285714"
                                                            y2="79.2" class="ct-point" ct:value="17"></line>
                                                        <line x1="156.47321428571428" y1="103.2" x2="156.48321428571427"
                                                            y2="103.2" class="ct-point" ct:value="7"></line>
                                                        <line x1="214.70982142857144" y1="79.2" x2="214.71982142857144"
                                                            y2="79.2" class="ct-point" ct:value="17"></line>
                                                        <line x1="272.94642857142856" y1="64.8" x2="272.95642857142855"
                                                            y2="64.8" class="ct-point" ct:value="23"></line>
                                                        <line x1="331.1830357142857" y1="76.8" x2="331.1930357142857"
                                                            y2="76.8" class="ct-point" ct:value="18"></line>
                                                        <line x1="389.4196428571429" y1="28.799999999999997"
                                                            x2="389.4296428571429" y2="28.799999999999997" class="ct-point"
                                                            ct:value="38"></line>
                                                    </g>
                                                </g>
                                                <g class="ct-labels">
                                                    <foreignObject style="overflow: visible;" x="40" y="125"
                                                        width="58.236607142857146" height="20"><span
                                                            class="ct-label ct-horizontal ct-end"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="width: 58px; height: 20px;">M</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" x="98.23660714285714" y="125"
                                                        width="58.236607142857146" height="20"><span
                                                            class="ct-label ct-horizontal ct-end"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="width: 58px; height: 20px;">T</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" x="156.47321428571428" y="125"
                                                        width="58.23660714285715" height="20"><span
                                                            class="ct-label ct-horizontal ct-end"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="width: 58px; height: 20px;">W</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" x="214.70982142857144" y="125"
                                                        width="58.23660714285714" height="20"><span
                                                            class="ct-label ct-horizontal ct-end"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="width: 58px; height: 20px;">T</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" x="272.94642857142856" y="125"
                                                        width="58.23660714285714" height="20"><span
                                                            class="ct-label ct-horizontal ct-end"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="width: 58px; height: 20px;">F</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" x="331.1830357142857" y="125"
                                                        width="58.23660714285717" height="20"><span
                                                            class="ct-label ct-horizontal ct-end"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="width: 58px; height: 20px;">S</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" x="389.4196428571429" y="125"
                                                        width="58.23660714285711" height="20"><span
                                                            class="ct-label ct-horizontal ct-end"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="width: 58px; height: 20px;">S</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" y="96" x="0" height="24"
                                                        width="30"><span class="ct-label ct-vertical ct-start"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="height: 24px; width: 30px;">0</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" y="72" x="0" height="24"
                                                        width="30"><span class="ct-label ct-vertical ct-start"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="height: 24px; width: 30px;">10</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" y="48" x="0" height="24"
                                                        width="30"><span class="ct-label ct-vertical ct-start"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="height: 24px; width: 30px;">20</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" y="24" x="0" height="24"
                                                        width="30"><span class="ct-label ct-vertical ct-start"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="height: 24px; width: 30px;">30</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" y="0" x="0" height="24"
                                                        width="30"><span class="ct-label ct-vertical ct-start"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="height: 24px; width: 30px;">40</span></foreignObject>
                                                    <foreignObject style="overflow: visible;" y="-30" x="0" height="30"
                                                        width="30"><span class="ct-label ct-vertical ct-start"
                                                            xmlns="http://www.w3.org/2000/xmlns/"
                                                            style="height: 30px; width: 30px;">50</span></foreignObject>
                                                </g>
                                            </svg></div> */}
                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title">Daily Sales</h4>
                                            <p class="card-category">
                                                <span class="text-success"><i class="fa fa-long-arrow2-up"></i> 55% </span>
                                                increase in today sales.
                                            </p>
                                        </div>
                                        <div class="card-footer2">
                                            <div class="stats">
                                                <i class="material-icons">access_time</i> updated 4 minutes ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-chart">
                                        <div class="card-header card-header-warning">
                                            <div class="ct-chart" id="websiteViewsChart"></div>
                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title">Email Subscriptions</h4>
                                            <p class="card-category">Last Campaign Performance</p>
                                        </div>
                                        <div class="card-footer2">
                                            <div class="stats">
                                                <i class="material-icons">access_time</i> campaign sent 2 days ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-chart">
                                        <div class="card-header card-header-danger">
                                            <div class="ct-chart" id="completedTasksChart"></div>
                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title">Completed Tasks</h4>
                                            <p class="card-category">Last Campaign Performance</p>
                                        </div>
                                        <div class="card-footer2">
                                            <div class="stats">
                                                <i class="material-icons">access_time</i> campaign sent 2 days ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row2">
                                <div class="col-lg-6 col-md-12">
                                    <div class="card">
                                        <div class="card-header card-header-tabs card-header-primary">
                                            <div class="nav2-tabs-nav2igation">
                                                <div class="nav2-tabs-wrapper">
                                                    <span class="nav2-tabs-title">Tasks:</span>
                                                    <ul class="nav2 nav2-tabs" data-tabs="tabs">
                                                        <li class="nav2-item2">
                                                            <a class="nav2-link2 activation" href="#profile" data-toggle="tab">
                                                                <i class="material-icons">bug_report</i> Bugs
                                                                <div class="ripple-container"></div>
                                                            </a>
                                                        </li>
                                                        <li class="nav2-item2">
                                                            <a class="nav2-link2" href="#messages" data-toggle="tab">
                                                                <i class="material-icons">code</i> Website
                                                                <div class="ripple-container"></div>
                                                            </a>
                                                        </li>
                                                        <li class="nav2-item2">
                                                            <a class="nav2-link2" href="#settings" data-toggle="tab">
                                                                <i class="material-icons">cloud</i> Server
                                                                <div class="ripple-container"></div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-content">
                                                <div class="tab-pane activation" id="profile">
                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" checked="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid
                                                                    of?"</td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My
                                                                    Boss?</td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what
                                                                    was found when a ravaging rain swept through metro Detroit
                                                                </td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" checked="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Create 4 Invisible User Experiences you Never Knew About
                                                                </td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane" id="messages">
                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" checked="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what
                                                                    was found when a ravaging rain swept through metro Detroit
                                                                </td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid
                                                                    of?"</td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane" id="settings">
                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My
                                                                    Boss?</td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" checked="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what
                                                                    was found when a ravaging rain swept through metro Detroit
                                                                </td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input class="form-check-input" type="checkbox"
                                                                                value="" checked="" />
                                                                            <span class="form-check-sign">
                                                                                <span class="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid
                                                                    of?"</td>
                                                                <td class="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task"
                                                                        class="btn2 btn2-primary btn2-link btn2-sm">
                                                                        <i class="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove"
                                                                        class="btn2 btn2-danger btn2-link btn2-sm">
                                                                        <i class="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="card">
                                        <div class="card-header card-header-warning">
                                            <h4 class="card-title">Employees Stats</h4>
                                            <p class="card-category">New employees on 15th September, 2016</p>
                                        </div>
                                        <div class="card-body table-responsive">
                                            <table class="table table-hover">
                                                <thead class="text-warning">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Salary</th>
                                                        <th>Country</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dakota Rice</td>
                                                        <td>$36,738</td>
                                                        <td>Niger</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Minerva Hooper</td>
                                                        <td>$23,789</td>
                                                        <td>Curaçao</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Sage Rodriguez</td>
                                                        <td>$56,142</td>
                                                        <td>Netherlands</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Philip Chaney</td>
                                                        <td>$38,735</td>
                                                        <td>Korea, South</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <footer2 class="footer2 ">
                        <div class="container-fluid2">
                            <nav2 class="pull-left">
                                <ul>
                                    <li>
                                        <a href="https://www.creative-tim.com">
                                            Creative Tim
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://presentation.creative-tim.com">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://blog.creative-tim.com">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.creative-tim.com/license">
                                            Licenses
                                        </a>
                                    </li>
                                </ul>
                            </nav2>
                            <div class="copyright pull-right">
                                ©
                                <script>
                                    document.write(new Date().getFullYear())
                                </script>2018, made with love by
                                <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
                            </div>
                        </div>
                    </footer2> */}
                </div>
            </div>
            <div class="fixed-plugin">
                <div class="dropdown show-dropdown open">
                    {/* <a href="#" data-toggle="dropdown">
                        <i class="fa fa-cog fa-2x"> </i>
                    </a> */}
                    <ul class="dropdown-menu">
                        <li class="header-title"> Sidebar Filters</li>
                        <li class="adjustments-line">
                            <a href="javascript:void(0)" class="switch-trigger activation-color">
                                <div class="ml-auto mr-auto">
                                    <span class="badge filter badge-purple activation" data-color="purple"></span>
                                    <span class="badge filter badge-azure" data-color="azure"></span>
                                    <span class="badge filter badge-green" data-color="green"></span>
                                    <span class="badge filter badge-orange" data-color="orange"></span>
                                    <span class="badge filter badge-danger" data-color="danger"></span>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>
                        <li class="header-title">Images</li>
                        <li class="activation">
                            <a class="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-1.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-2.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-3.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a class="img-holder switch-trigger" href="javascript:void(0)">
                                <img src="../assets/img/sidebar-4.jpg" alt="" />
                            </a>
                        </li>
                        <li class="button-container">
                            <div>
                                <a href="http://www.creative-tim.com/product/material-dashboard" target="_blank"
                                    class="btn2 btn2-primary btn2-block btn2-fill">Free download</a>
                            </div>
                        </li>
                        <li class="header-title">Want more components?</li>
                        <li class="button-container">
                            <div>
                                <a href="http://www.creative-tim.com/product/material-dashboard-pro" target="_blank"
                                    class="btn2 btn2-warning btn2-block">Get the PRO version</a>
                            </div>
                        </li>
                        <li class="button-container">
                            <div>
                                <a href="http://demos.creative-tim.com/material-dashboard/docs/2.0/getting-started/introduction.html"
                                    target="_blank" class="btn2 btn2-default btn2-block">View Documentation</a>
                            </div>
                        </li>
                        <li class="header-title" id="sharrreTitle">Thank you for 95 shares!</li>
                        <li class="button-container">
                            <button id="twitter" class="btn2 btn2-social btn2-twitter btn2-round sharrre"><i
                                class="fa fa-twitter"></i> · 45</button>
                            <button id="facebook" class="btn2 btn2-social btn2-facebook btn2-round sharrre"><i
                                class="fa fa-facebook-square"></i> · 50</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Admin