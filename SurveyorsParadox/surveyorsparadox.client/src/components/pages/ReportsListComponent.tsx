import ReportListItem from "../ReportListItem"
import NavBar from "../NavBar"


  export default function ReportListComponent() {
    return (
        <>
            <div className=" text-white font-bold">

                <NavBar/>

                <ReportListItem></ReportListItem>
                <ReportListItem></ReportListItem>
                <ReportListItem></ReportListItem>

				<ReportListItem></ReportListItem>
            </div>
        </>
    )
  }
  