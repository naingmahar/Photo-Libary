import { useEffect } from "react"
import { ELABELS } from "../../assets/static_string"
import {  IconKey } from "../../componet/atoms/icons"
import CocoPage from "../../componet/themes/coco/page"
import CoCoTable from "../../componet/themes/coco/table"
import { useGetAllCustomers } from "../../feature/query/customer/customer.q"
import CustomerRow from "../../componet/molecules/ColumnRow/CustomerRow"

const CustomersPage = () => {

    const customerState = useGetAllCustomers();
    useEffect(()=>{
        customerState.mutate()
    },[])

    return(
        <CocoPage 
            isEmpty={false} 
            title={ELABELS.customers} 
            buttonLabel={ELABELS.customers}
            buttonRoute=""
            icon={IconKey.customers}>
            
            <CoCoTable 
                headerStaus={false}
                            header={["Id", "Email", "Name", "Phone"]} 
                            types={[{itemKey:"id",type:"string"},{itemKey:"email",type:"string"},{itemKey:"name",type:"string"},{itemKey:"phno",type:"string"}]}
                            mobileUiPlugin={(customer)=><CustomerRow key={customer.id} data={customer} />}
                            data={customerState.data?.data||[]} />

        </CocoPage>
    )
}

export default CustomersPage