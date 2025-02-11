openapi: 3.0.1
info:
  description: Network Management Open APIs for SONiC
  version: 1.0.0
  title: Sonic Network Management RESTCONF APIs
servers:
- url: https://
security:
- basic: []
- bearer: []
tags:
- name: openconfig-lldp
  description: Operations for openconfig-lldp
- name: openconfig-lldp-ext
  description: Operations for openconfig-lldp-ext
paths:
  /restconf/data/openconfig-lldp:lldp:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp
      x-operationIdCamelCase: PutOpenconfigLldpLldp
      description: 'OperationId: put_openconfig_lldp_lldp

        Top-level container for LLDP configuration and state data'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp
      x-operationIdCamelCase: PatchOpenconfigLldpLldp
      description: 'OperationId: patch_openconfig_lldp_lldp

        Top-level container for LLDP configuration and state data'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp
      x-operationIdCamelCase: GetOpenconfigLldpLldp
      description: 'OperationId: get_openconfig_lldp_lldp

        Top-level container for LLDP configuration and state data'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp
      x-operationIdCamelCase: HeadOpenconfigLldpLldp
      description: 'OperationId: head_openconfig_lldp_lldp

        Top-level container for LLDP configuration and state data'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp
      x-operationIdCamelCase: DeleteOpenconfigLldpLldp
      description: 'OperationId: delete_openconfig_lldp_lldp

        Top-level container for LLDP configuration and state data'
    post:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: post_openconfig_lldp_lldp_config
      x-operationIdCamelCase: PostOpenconfigLldpLldpConfig
      description: 'OperationId: post_openconfig_lldp_lldp_config

        Configuration data '
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/post_openconfig_lldp_lldp_config'
        required: true
  /restconf/data/openconfig-lldp:lldp/config:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_config
      x-operationIdCamelCase: PutOpenconfigLldpLldpConfig
      description: 'OperationId: put_openconfig_lldp_lldp_config

        Configuration data '
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_config'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_config
      x-operationIdCamelCase: PatchOpenconfigLldpLldpConfig
      description: 'OperationId: patch_openconfig_lldp_lldp_config

        Configuration data '
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_config'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_config'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_config
      x-operationIdCamelCase: GetOpenconfigLldpLldpConfig
      description: 'OperationId: get_openconfig_lldp_lldp_config

        Configuration data '
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_config
      x-operationIdCamelCase: HeadOpenconfigLldpLldpConfig
      description: 'OperationId: head_openconfig_lldp_lldp_config

        Configuration data '
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_config
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpConfig
      description: 'OperationId: delete_openconfig_lldp_lldp_config

        Configuration data '
    post:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: post_openconfig_lldp_lldp_config_enabled
      x-operationIdCamelCase: PostOpenconfigLldpLldpConfigEnabled
      description: 'OperationId: post_openconfig_lldp_lldp_config_enabled

        System level state of the LLDP protocol.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/post_openconfig_lldp_lldp_config_enabled'
        required: true
  /restconf/data/openconfig-lldp:lldp/config/enabled:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_config_enabled
      x-operationIdCamelCase: PutOpenconfigLldpLldpConfigEnabled
      description: 'OperationId: put_openconfig_lldp_lldp_config_enabled

        System level state of the LLDP protocol.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_config_enabled'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_config_enabled
      x-operationIdCamelCase: PatchOpenconfigLldpLldpConfigEnabled
      description: 'OperationId: patch_openconfig_lldp_lldp_config_enabled

        System level state of the LLDP protocol.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_config_enabled'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_config_enabled'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_config_enabled
      x-operationIdCamelCase: GetOpenconfigLldpLldpConfigEnabled
      description: 'OperationId: get_openconfig_lldp_lldp_config_enabled

        System level state of the LLDP protocol.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_config_enabled
      x-operationIdCamelCase: HeadOpenconfigLldpLldpConfigEnabled
      description: 'OperationId: head_openconfig_lldp_lldp_config_enabled

        System level state of the LLDP protocol.'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_config_enabled
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpConfigEnabled
      description: 'OperationId: delete_openconfig_lldp_lldp_config_enabled

        System level state of the LLDP protocol.'
  /restconf/data/openconfig-lldp:lldp/config/hello-timer:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_config_hello_timer
      x-operationIdCamelCase: PutOpenconfigLldpLldpConfigHelloTimer
      description: 'OperationId: put_openconfig_lldp_lldp_config_hello_timer

        System level hello timer for the LLDP protocol.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_config_hello_timer'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_config_hello_timer
      x-operationIdCamelCase: PatchOpenconfigLldpLldpConfigHelloTimer
      description: 'OperationId: patch_openconfig_lldp_lldp_config_hello_timer

        System level hello timer for the LLDP protocol.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_config_hello_timer'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_config_hello_timer'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_config_hello_timer
      x-operationIdCamelCase: GetOpenconfigLldpLldpConfigHelloTimer
      description: 'OperationId: get_openconfig_lldp_lldp_config_hello_timer

        System level hello timer for the LLDP protocol.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_config_hello_timer
      x-operationIdCamelCase: HeadOpenconfigLldpLldpConfigHelloTimer
      description: 'OperationId: head_openconfig_lldp_lldp_config_hello_timer

        System level hello timer for the LLDP protocol.'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_config_hello_timer
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpConfigHelloTimer
      description: 'OperationId: delete_openconfig_lldp_lldp_config_hello_timer

        System level hello timer for the LLDP protocol.'
  /restconf/data/openconfig-lldp:lldp/config/suppress-tlv-advertisement:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_config_suppress_tlv_advertisement
      x-operationIdCamelCase: PutOpenconfigLldpLldpConfigSuppressTlvAdvertisement
      description: 'OperationId: put_openconfig_lldp_lldp_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_config_suppress_tlv_advertisement'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_config_suppress_tlv_advertisement
      x-operationIdCamelCase: PatchOpenconfigLldpLldpConfigSuppressTlvAdvertisement
      description: 'OperationId: patch_openconfig_lldp_lldp_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_config_suppress_tlv_advertisement'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_config_suppress_tlv_advertisement'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_config_suppress_tlv_advertisement
      x-operationIdCamelCase: GetOpenconfigLldpLldpConfigSuppressTlvAdvertisement
      description: 'OperationId: get_openconfig_lldp_lldp_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_config_suppress_tlv_advertisement
      x-operationIdCamelCase: HeadOpenconfigLldpLldpConfigSuppressTlvAdvertisement
      description: 'OperationId: head_openconfig_lldp_lldp_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_config_suppress_tlv_advertisement
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpConfigSuppressTlvAdvertisement
      description: 'OperationId: delete_openconfig_lldp_lldp_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
  /restconf/data/openconfig-lldp:lldp/config/suppress-tlv-advertisement={suppress-tlv-advertisement}:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: suppress-tlv-advertisement
        in: path
        required: true
        schema:
          enum:
          - SYSTEM_DESCRIPTION
          - MANAGEMENT_ADDRESS
          - MED_NETWORK_POLICY
          - SYSTEM_NAME
          - PORT_VLAN_ID
          - VLAN_NAME
          - LINK_AGGREGATION
          - MED_EXT_MDI_POWER
          - CHASSIS_ID
          - MDI_POWER
          - MAX_FRAME_SIZE
          - PORT_ID
          - SYSTEM_CAPABILITIES
          - PORT_DESCRIPTION
          format: string
          type: string
          x-yang-type: identityref
        description: 'Indicates whether the local system should suppress the

          advertisement of particular TLVs with the LLDP PDUs that it

          transmits. Where a TLV type is specified within this list, it

          should not be included in any LLDP PDU transmitted by the

          local agent.'
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_config_suppress_tlv_advertisement'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_llist_openconfig_lldp_lldp_config_suppress_tlv_advertisement
      x-operationIdCamelCase: GetLlistOpenconfigLldpLldpConfigSuppressTlvAdvertisement
      description: 'OperationId: get_llist_openconfig_lldp_lldp_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: suppress-tlv-advertisement
        in: path
        required: true
        schema:
          enum:
          - SYSTEM_DESCRIPTION
          - MANAGEMENT_ADDRESS
          - MED_NETWORK_POLICY
          - SYSTEM_NAME
          - PORT_VLAN_ID
          - VLAN_NAME
          - LINK_AGGREGATION
          - MED_EXT_MDI_POWER
          - CHASSIS_ID
          - MDI_POWER
          - MAX_FRAME_SIZE
          - PORT_ID
          - SYSTEM_CAPABILITIES
          - PORT_DESCRIPTION
          format: string
          type: string
          x-yang-type: identityref
        description: 'Indicates whether the local system should suppress the

          advertisement of particular TLVs with the LLDP PDUs that it

          transmits. Where a TLV type is specified within this list, it

          should not be included in any LLDP PDU transmitted by the

          local agent.'
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_llist_openconfig_lldp_lldp_config_suppress_tlv_advertisement
      x-operationIdCamelCase: HeadLlistOpenconfigLldpLldpConfigSuppressTlvAdvertisement
      description: 'OperationId: head_llist_openconfig_lldp_lldp_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: suppress-tlv-advertisement
        in: path
        required: true
        schema:
          enum:
          - SYSTEM_DESCRIPTION
          - MANAGEMENT_ADDRESS
          - MED_NETWORK_POLICY
          - SYSTEM_NAME
          - PORT_VLAN_ID
          - VLAN_NAME
          - LINK_AGGREGATION
          - MED_EXT_MDI_POWER
          - CHASSIS_ID
          - MDI_POWER
          - MAX_FRAME_SIZE
          - PORT_ID
          - SYSTEM_CAPABILITIES
          - PORT_DESCRIPTION
          format: string
          type: string
          x-yang-type: identityref
        description: 'Indicates whether the local system should suppress the

          advertisement of particular TLVs with the LLDP PDUs that it

          transmits. Where a TLV type is specified within this list, it

          should not be included in any LLDP PDU transmitted by the

          local agent.'
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: del_llist_openconfig_lldp_lldp_config_suppress_tlv_advertisement
      x-operationIdCamelCase: DelLlistOpenconfigLldpLldpConfigSuppressTlvAdvertisement
      description: 'OperationId: del_llist_openconfig_lldp_lldp_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
  /restconf/data/openconfig-lldp:lldp/config/system-name:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_config_system_name
      x-operationIdCamelCase: PutOpenconfigLldpLldpConfigSystemName
      description: 'OperationId: put_openconfig_lldp_lldp_config_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_config_system_name'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_config_system_name
      x-operationIdCamelCase: PatchOpenconfigLldpLldpConfigSystemName
      description: 'OperationId: patch_openconfig_lldp_lldp_config_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_config_system_name'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_config_system_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_config_system_name
      x-operationIdCamelCase: GetOpenconfigLldpLldpConfigSystemName
      description: 'OperationId: get_openconfig_lldp_lldp_config_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_config_system_name
      x-operationIdCamelCase: HeadOpenconfigLldpLldpConfigSystemName
      description: 'OperationId: head_openconfig_lldp_lldp_config_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_config_system_name
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpConfigSystemName
      description: 'OperationId: delete_openconfig_lldp_lldp_config_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
  /restconf/data/openconfig-lldp:lldp/config/system-description:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_config_system_description
      x-operationIdCamelCase: PutOpenconfigLldpLldpConfigSystemDescription
      description: 'OperationId: put_openconfig_lldp_lldp_config_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_config_system_description'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_config_system_description
      x-operationIdCamelCase: PatchOpenconfigLldpLldpConfigSystemDescription
      description: 'OperationId: patch_openconfig_lldp_lldp_config_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_config_system_description'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_config_system_description'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_config_system_description
      x-operationIdCamelCase: GetOpenconfigLldpLldpConfigSystemDescription
      description: 'OperationId: get_openconfig_lldp_lldp_config_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_config_system_description
      x-operationIdCamelCase: HeadOpenconfigLldpLldpConfigSystemDescription
      description: 'OperationId: head_openconfig_lldp_lldp_config_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_config_system_description
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpConfigSystemDescription
      description: 'OperationId: delete_openconfig_lldp_lldp_config_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
  /restconf/data/openconfig-lldp:lldp/config/openconfig-lldp-ext:multiplier:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_config_multiplier
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpConfigMultiplier
      description: 'OperationId: put_openconfig_lldp_ext_lldp_config_multiplier

        This multiplier value is used to determine the timeout

        interval (i.e. hello-timer x multiplier value) after

        which LLDP neighbor entry is deleted.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_config_multiplier'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_config_multiplier
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpConfigMultiplier
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_config_multiplier

        This multiplier value is used to determine the timeout

        interval (i.e. hello-timer x multiplier value) after

        which LLDP neighbor entry is deleted.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_config_multiplier'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_config_multiplier'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_config_multiplier
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpConfigMultiplier
      description: 'OperationId: get_openconfig_lldp_ext_lldp_config_multiplier

        This multiplier value is used to determine the timeout

        interval (i.e. hello-timer x multiplier value) after

        which LLDP neighbor entry is deleted.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_config_multiplier
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpConfigMultiplier
      description: 'OperationId: head_openconfig_lldp_ext_lldp_config_multiplier

        This multiplier value is used to determine the timeout

        interval (i.e. hello-timer x multiplier value) after

        which LLDP neighbor entry is deleted.'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_config_multiplier
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpConfigMultiplier
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_config_multiplier

        This multiplier value is used to determine the timeout

        interval (i.e. hello-timer x multiplier value) after

        which LLDP neighbor entry is deleted.'
  /restconf/data/openconfig-lldp:lldp/config/openconfig-lldp-ext:mode:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_config_mode
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpConfigMode
      description: 'OperationId: put_openconfig_lldp_ext_lldp_config_mode

        RX/TX mode for LLDP frames'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_config_mode'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_config_mode
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpConfigMode
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_config_mode

        RX/TX mode for LLDP frames'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_config_mode'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_config_mode'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_config_mode
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpConfigMode
      description: 'OperationId: get_openconfig_lldp_ext_lldp_config_mode

        RX/TX mode for LLDP frames'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_config_mode
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpConfigMode
      description: 'OperationId: head_openconfig_lldp_ext_lldp_config_mode

        RX/TX mode for LLDP frames'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_config_mode
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpConfigMode
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_config_mode

        RX/TX mode for LLDP frames'
  /restconf/data/openconfig-lldp:lldp/state:
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_state
      x-operationIdCamelCase: GetOpenconfigLldpLldpState
      description: 'OperationId: get_openconfig_lldp_lldp_state

        Operational state data '
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_state
      x-operationIdCamelCase: HeadOpenconfigLldpLldpState
      description: 'OperationId: head_openconfig_lldp_lldp_state

        Operational state data '
  /restconf/data/openconfig-lldp:lldp/state/enabled:
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_state_enabled'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_state_enabled
      x-operationIdCamelCase: GetOpenconfigLldpLldpStateEnabled
      description: 'OperationId: get_openconfig_lldp_lldp_state_enabled

        System level state of the LLDP protocol.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_state_enabled
      x-operationIdCamelCase: HeadOpenconfigLldpLldpStateEnabled
      description: 'OperationId: head_openconfig_lldp_lldp_state_enabled

        System level state of the LLDP protocol.'
  /restconf/data/openconfig-lldp:lldp/state/hello-timer:
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_state_hello_timer'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_state_hello_timer
      x-operationIdCamelCase: GetOpenconfigLldpLldpStateHelloTimer
      description: 'OperationId: get_openconfig_lldp_lldp_state_hello_timer

        System level hello timer for the LLDP protocol.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_state_hello_timer
      x-operationIdCamelCase: HeadOpenconfigLldpLldpStateHelloTimer
      description: 'OperationId: head_openconfig_lldp_lldp_state_hello_timer

        System level hello timer for the LLDP protocol.'
  /restconf/data/openconfig-lldp:lldp/state/suppress-tlv-advertisement:
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_state_suppress_tlv_advertisement'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_state_suppress_tlv_advertisement
      x-operationIdCamelCase: GetOpenconfigLldpLldpStateSuppressTlvAdvertisement
      description: 'OperationId: get_openconfig_lldp_lldp_state_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_state_suppress_tlv_advertisement
      x-operationIdCamelCase: HeadOpenconfigLldpLldpStateSuppressTlvAdvertisement
      description: 'OperationId: head_openconfig_lldp_lldp_state_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
  /restconf/data/openconfig-lldp:lldp/state/system-name:
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_state_system_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_state_system_name
      x-operationIdCamelCase: GetOpenconfigLldpLldpStateSystemName
      description: 'OperationId: get_openconfig_lldp_lldp_state_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_state_system_name
      x-operationIdCamelCase: HeadOpenconfigLldpLldpStateSystemName
      description: 'OperationId: head_openconfig_lldp_lldp_state_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
  /restconf/data/openconfig-lldp:lldp/state/system-description:
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_state_system_description'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_state_system_description
      x-operationIdCamelCase: GetOpenconfigLldpLldpStateSystemDescription
      description: 'OperationId: get_openconfig_lldp_lldp_state_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_state_system_description
      x-operationIdCamelCase: HeadOpenconfigLldpLldpStateSystemDescription
      description: 'OperationId: head_openconfig_lldp_lldp_state_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
  /restconf/data/openconfig-lldp:lldp/state/openconfig-lldp-ext:multiplier:
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_state_multiplier'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_state_multiplier
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpStateMultiplier
      description: 'OperationId: get_openconfig_lldp_ext_lldp_state_multiplier

        This multiplier value is used to determine the timeout

        interval (i.e. hello-timer x multiplier value) after

        which LLDP neighbor entry is deleted.'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_state_multiplier
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpStateMultiplier
      description: 'OperationId: head_openconfig_lldp_ext_lldp_state_multiplier

        This multiplier value is used to determine the timeout

        interval (i.e. hello-timer x multiplier value) after

        which LLDP neighbor entry is deleted.'
  /restconf/data/openconfig-lldp:lldp/state/openconfig-lldp-ext:mode:
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_state_mode'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_state_mode
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpStateMode
      description: 'OperationId: get_openconfig_lldp_ext_lldp_state_mode

        RX/TX mode for LLDP frames'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_state_mode
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpStateMode
      description: 'OperationId: head_openconfig_lldp_ext_lldp_state_mode

        RX/TX mode for LLDP frames'
  /restconf/data/openconfig-lldp:lldp/interfaces:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_interfaces
      x-operationIdCamelCase: PutOpenconfigLldpLldpInterfaces
      description: 'OperationId: put_openconfig_lldp_lldp_interfaces

        Enclosing container '
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_interfaces'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_interfaces
      x-operationIdCamelCase: PatchOpenconfigLldpLldpInterfaces
      description: 'OperationId: patch_openconfig_lldp_lldp_interfaces

        Enclosing container '
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_interfaces'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_interfaces
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfaces
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces

        Enclosing container '
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_interfaces
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfaces
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces

        Enclosing container '
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_interfaces
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpInterfaces
      description: 'OperationId: delete_openconfig_lldp_lldp_interfaces

        Enclosing container '
    post:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: post_list_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: PostListOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: post_list_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/post_list_openconfig_lldp_lldp_interfaces_interface'
        required: true
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: PutOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: put_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_interfaces_interface'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: PatchOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: patch_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_interfaces_interface'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: delete_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
    post:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: post_openconfig_lldp_lldp_interfaces_interface_config
      x-operationIdCamelCase: PostOpenconfigLldpLldpInterfacesInterfaceConfig
      description: 'OperationId: post_openconfig_lldp_lldp_interfaces_interface_config

        Configuration data for LLDP on each interface'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/post_openconfig_lldp_lldp_interfaces_interface_config'
        required: true
  /restconf/data/openconfig-lldp:lldp/interfaces/interface:
    put:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_list_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: PutListOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: put_list_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_list_openconfig_lldp_lldp_interfaces_interface'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_list_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: PatchListOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: patch_list_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_list_openconfig_lldp_lldp_interfaces_interface'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_list_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: GetListOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: get_list_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
    head:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_list_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: HeadListOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: head_list_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
    delete:
      tags:
      - openconfig-lldp
      parameters: []
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_list_openconfig_lldp_lldp_interfaces_interface
      x-operationIdCamelCase: DeleteListOpenconfigLldpLldpInterfacesInterface
      description: 'OperationId: delete_list_openconfig_lldp_lldp_interfaces_interface

        List of interfaces on which LLDP is enabled / available'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/name:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_interfaces_interface_name
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceName
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_name

        Reference to the list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_interfaces_interface_name
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceName
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_name

        Reference to the list key'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_interfaces_interface_config
      x-operationIdCamelCase: PutOpenconfigLldpLldpInterfacesInterfaceConfig
      description: 'OperationId: put_openconfig_lldp_lldp_interfaces_interface_config

        Configuration data for LLDP on each interface'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_interfaces_interface_config'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_interfaces_interface_config
      x-operationIdCamelCase: PatchOpenconfigLldpLldpInterfacesInterfaceConfig
      description: 'OperationId: patch_openconfig_lldp_lldp_interfaces_interface_config

        Configuration data for LLDP on each interface'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_interfaces_interface_config'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_config'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_interfaces_interface_config
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceConfig
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_config

        Configuration data for LLDP on each interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_interfaces_interface_config
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceConfig
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_config

        Configuration data for LLDP on each interface'
    post:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: post_openconfig_lldp_lldp_interfaces_interface_config_enabled
      x-operationIdCamelCase: PostOpenconfigLldpLldpInterfacesInterfaceConfigEnabled
      description: 'OperationId: post_openconfig_lldp_lldp_interfaces_interface_config_enabled

        Enable or disable the LLDP protocol on the interface.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/post_openconfig_lldp_lldp_interfaces_interface_config_enabled'
        required: true
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/name:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_config_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_interfaces_interface_config_name
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceConfigName
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_config_name

        Reference to the LLDP Ethernet interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_interfaces_interface_config_name
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceConfigName
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_config_name

        Reference to the LLDP Ethernet interface'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/enabled:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_lldp_interfaces_interface_config_enabled
      x-operationIdCamelCase: PutOpenconfigLldpLldpInterfacesInterfaceConfigEnabled
      description: 'OperationId: put_openconfig_lldp_lldp_interfaces_interface_config_enabled

        Enable or disable the LLDP protocol on the interface.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_lldp_interfaces_interface_config_enabled'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_lldp_interfaces_interface_config_enabled
      x-operationIdCamelCase: PatchOpenconfigLldpLldpInterfacesInterfaceConfigEnabled
      description: 'OperationId: patch_openconfig_lldp_lldp_interfaces_interface_config_enabled

        Enable or disable the LLDP protocol on the interface.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_lldp_interfaces_interface_config_enabled'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_config_enabled'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_lldp_interfaces_interface_config_enabled
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceConfigEnabled
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_config_enabled

        Enable or disable the LLDP protocol on the interface.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_lldp_interfaces_interface_config_enabled
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceConfigEnabled
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_config_enabled

        Enable or disable the LLDP protocol on the interface.'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_lldp_interfaces_interface_config_enabled
      x-operationIdCamelCase: DeleteOpenconfigLldpLldpInterfacesInterfaceConfigEnabled
      description: 'OperationId: delete_openconfig_lldp_lldp_interfaces_interface_config_enabled

        Enable or disable the LLDP protocol on the interface.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:management-address-ipv4:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv4
      description: 'OperationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4

        IPv4 management address that will be used to advertise by LLDP on an interface'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv4
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4

        IPv4 management address that will be used to advertise by LLDP on an interface'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv4
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4

        IPv4 management address that will be used to advertise by LLDP on an interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv4
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4

        IPv4 management address that will be used to advertise by LLDP on an interface'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv4
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4

        IPv4 management address that will be used to advertise by LLDP on an interface'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:management-address-ipv6:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv6
      description: 'OperationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6

        IPv6 management address that will be used to advertise by LLDP on an interface'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv6
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6

        IPv6 management address that will be used to advertise by LLDP on an interface'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv6
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6

        IPv6 management address that will be used to advertise by LLDP on an interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv6
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6

        IPv6 management address that will be used to advertise by LLDP on an interface'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpInterfacesInterfaceConfigManagementAddressIpv6
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6

        IPv6 management address that will be used to advertise by LLDP on an interface'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:network-policy:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpInterfacesInterfaceConfigNetworkPolicy
      description: 'OperationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy

        Reference to the Network policy profile number'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpInterfacesInterfaceConfigNetworkPolicy
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy

        Reference to the Network policy profile number'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceConfigNetworkPolicy
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy

        Reference to the Network policy profile number'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceConfigNetworkPolicy
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy

        Reference to the Network policy profile number'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpInterfacesInterfaceConfigNetworkPolicy
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy

        Reference to the Network policy profile number'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:suppress-tlv-advertisement:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpInterfacesInterfaceConfigSuppressTlvAdvertisement
      description: 'OperationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpInterfacesInterfaceConfigSuppressTlvAdvertisement
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceConfigSuppressTlvAdvertisement
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceConfigSuppressTlvAdvertisement
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpInterfacesInterfaceConfigSuppressTlvAdvertisement
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:suppress-tlv-advertisement={suppress-tlv-advertisement}
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: suppress-tlv-advertisement
        in: path
        required: true
        schema:
          enum:
          - SYSTEM_DESCRIPTION
          - MANAGEMENT_ADDRESS
          - MED_NETWORK_POLICY
          - SYSTEM_NAME
          - PORT_VLAN_ID
          - VLAN_NAME
          - LINK_AGGREGATION
          - MED_EXT_MDI_POWER
          - CHASSIS_ID
          - MDI_POWER
          - MAX_FRAME_SIZE
          - PORT_ID
          - SYSTEM_CAPABILITIES
          - PORT_DESCRIPTION
          format: string
          type: string
          x-yang-type: identityref
        description: 'Indicates whether the local system should suppress the

          advertisement of particular TLVs with the LLDP PDUs that it

          transmits. Where a TLV type is specified within this list, it

          should not be included in any LLDP PDU transmitted by the

          local agent.'
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement
      x-operationIdCamelCase: GetLlistOpenconfigLldpExtLldpInterfacesInterfaceConfigSuppressTlvAdvertisement
      description: 'OperationId: get_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: suppress-tlv-advertisement
        in: path
        required: true
        schema:
          enum:
          - SYSTEM_DESCRIPTION
          - MANAGEMENT_ADDRESS
          - MED_NETWORK_POLICY
          - SYSTEM_NAME
          - PORT_VLAN_ID
          - VLAN_NAME
          - LINK_AGGREGATION
          - MED_EXT_MDI_POWER
          - CHASSIS_ID
          - MDI_POWER
          - MAX_FRAME_SIZE
          - PORT_ID
          - SYSTEM_CAPABILITIES
          - PORT_DESCRIPTION
          format: string
          type: string
          x-yang-type: identityref
        description: 'Indicates whether the local system should suppress the

          advertisement of particular TLVs with the LLDP PDUs that it

          transmits. Where a TLV type is specified within this list, it

          should not be included in any LLDP PDU transmitted by the

          local agent.'
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement
      x-operationIdCamelCase: HeadLlistOpenconfigLldpExtLldpInterfacesInterfaceConfigSuppressTlvAdvertisement
      description: 'OperationId: head_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: suppress-tlv-advertisement
        in: path
        required: true
        schema:
          enum:
          - SYSTEM_DESCRIPTION
          - MANAGEMENT_ADDRESS
          - MED_NETWORK_POLICY
          - SYSTEM_NAME
          - PORT_VLAN_ID
          - VLAN_NAME
          - LINK_AGGREGATION
          - MED_EXT_MDI_POWER
          - CHASSIS_ID
          - MDI_POWER
          - MAX_FRAME_SIZE
          - PORT_ID
          - SYSTEM_CAPABILITIES
          - PORT_DESCRIPTION
          format: string
          type: string
          x-yang-type: identityref
        description: 'Indicates whether the local system should suppress the

          advertisement of particular TLVs with the LLDP PDUs that it

          transmits. Where a TLV type is specified within this list, it

          should not be included in any LLDP PDU transmitted by the

          local agent.'
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: del_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement
      x-operationIdCamelCase: DelLlistOpenconfigLldpExtLldpInterfacesInterfaceConfigSuppressTlvAdvertisement
      description: 'OperationId: del_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:allowed-vlans:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpInterfacesInterfaceConfigAllowedVlans
      description: 'OperationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpInterfacesInterfaceConfigAllowedVlans
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceConfigAllowedVlans
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceConfigAllowedVlans
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpInterfacesInterfaceConfigAllowedVlans
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:allowed-vlans={allowed-vlans}:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: allowed-vlans
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: 'Specify VLANs, or ranges thereof, for which the interface will

          send vlan-name TLV. Ranges are specified in the form

          x..y, where x<y - ranges are assumed to be inclusive (such

          that the VLAN range is x <= range <= y.'
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans
      x-operationIdCamelCase: GetLlistOpenconfigLldpExtLldpInterfacesInterfaceConfigAllowedVlans
      description: 'OperationId: get_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: allowed-vlans
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: 'Specify VLANs, or ranges thereof, for which the interface will

          send vlan-name TLV. Ranges are specified in the form

          x..y, where x<y - ranges are assumed to be inclusive (such

          that the VLAN range is x <= range <= y.'
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans
      x-operationIdCamelCase: HeadLlistOpenconfigLldpExtLldpInterfacesInterfaceConfigAllowedVlans
      description: 'OperationId: head_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: allowed-vlans
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: 'Specify VLANs, or ranges thereof, for which the interface will

          send vlan-name TLV. Ranges are specified in the form

          x..y, where x<y - ranges are assumed to be inclusive (such

          that the VLAN range is x <= range <= y.'
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: del_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans
      x-operationIdCamelCase: DelLlistOpenconfigLldpExtLldpInterfacesInterfaceConfigAllowedVlans
      description: 'OperationId: del_llist_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:vlan-name-tlv-count:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpInterfacesInterfaceConfigVlanNameTlvCount
      description: 'OperationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count

        Maximum number of Vlan-name TLVs that can be transmitted'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpInterfacesInterfaceConfigVlanNameTlvCount
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count

        Maximum number of Vlan-name TLVs that can be transmitted'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceConfigVlanNameTlvCount
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count

        Maximum number of Vlan-name TLVs that can be transmitted'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceConfigVlanNameTlvCount
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count

        Maximum number of Vlan-name TLVs that can be transmitted'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpInterfacesInterfaceConfigVlanNameTlvCount
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count

        Maximum number of Vlan-name TLVs that can be transmitted'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/config/openconfig-lldp-ext:mode:
    put:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '201':
          description: Created
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_mode
      x-operationIdCamelCase: PutOpenconfigLldpExtLldpInterfacesInterfaceConfigMode
      description: 'OperationId: put_openconfig_lldp_ext_lldp_interfaces_interface_config_mode

        RX/TX mode for LLDP frames'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/put_openconfig_lldp_ext_lldp_interfaces_interface_config_mode'
        required: true
    patch:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '403':
          description: Forbidden
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '409':
          description: Conflict
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_mode
      x-operationIdCamelCase: PatchOpenconfigLldpExtLldpInterfacesInterfaceConfigMode
      description: 'OperationId: patch_openconfig_lldp_ext_lldp_interfaces_interface_config_mode

        RX/TX mode for LLDP frames'
      requestBody:
        content:
          application/yang-data+json:
            schema:
              $ref: '#/components/schemas/patch_openconfig_lldp_ext_lldp_interfaces_interface_config_mode'
          application/yang-patch+json:
            schema: {}
        required: true
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_config_mode'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_mode
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceConfigMode
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_config_mode

        RX/TX mode for LLDP frames'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_mode
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceConfigMode
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_config_mode

        RX/TX mode for LLDP frames'
    delete:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '204':
          description: No Content
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      operationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_mode
      x-operationIdCamelCase: DeleteOpenconfigLldpExtLldpInterfacesInterfaceConfigMode
      description: 'OperationId: delete_openconfig_lldp_ext_lldp_interfaces_interface_config_mode

        RX/TX mode for LLDP frames'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_state
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceState
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_state

        Operational state data '
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_state
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceState
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_state

        Operational state data '
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/name:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_state_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_state_name
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceStateName
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_state_name

        Reference to the LLDP Ethernet interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_state_name
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceStateName
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_state_name

        Reference to the LLDP Ethernet interface'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/enabled:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_state_enabled'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_state_enabled
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceStateEnabled
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_state_enabled

        Enable or disable the LLDP protocol on the interface.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_state_enabled
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceStateEnabled
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_state_enabled

        Enable or disable the LLDP protocol on the interface.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/counters:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_state_counters'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceStateCounters
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters

        LLDP counters on each interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceStateCounters
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters

        LLDP counters on each interface'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/counters/frame-in:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_in'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_in
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceStateCountersFrameIn
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_in

        The number of lldp frames received.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_in
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceStateCountersFrameIn
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_in

        The number of lldp frames received.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/counters/frame-out:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_out'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_out
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceStateCountersFrameOut
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_out

        The number of frames transmitted out.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_out
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceStateCountersFrameOut
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_out

        The number of frames transmitted out.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/counters/frame-discard:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_discard'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_discard
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceStateCountersFrameDiscard
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_discard

        The number of LLDP frames received and discarded.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_discard
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceStateCountersFrameDiscard
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_discard

        The number of LLDP frames received and discarded.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/counters/tlv-unknown:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_state_counters_tlv_unknown'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters_tlv_unknown
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceStateCountersTlvUnknown
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_state_counters_tlv_unknown

        The number of frames received with unknown TLV.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters_tlv_unknown
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceStateCountersTlvUnknown
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_state_counters_tlv_unknown

        The number of frames received with unknown TLV.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/counters/openconfig-lldp-ext:ageout:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_state_counters_ageout'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_counters_ageout
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceStateCountersAgeout
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_counters_ageout

        Indicates number of times neighbor aged out'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_counters_ageout
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceStateCountersAgeout
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_counters_ageout

        Indicates number of times neighbor aged out'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/openconfig-lldp-ext:management-address-ipv4:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv4'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv4
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceStateManagementAddressIpv4
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv4

        IPv4 management address that will be used to advertise by LLDP on an interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv4
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceStateManagementAddressIpv4
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv4

        IPv4 management address that will be used to advertise by LLDP on an interface'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/openconfig-lldp-ext:management-address-ipv6:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv6'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv6
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceStateManagementAddressIpv6
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv6

        IPv6 management address that will be used to advertise by LLDP on an interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv6
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceStateManagementAddressIpv6
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv6

        IPv6 management address that will be used to advertise by LLDP on an interface'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/openconfig-lldp-ext:network-policy:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_state_network_policy'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_network_policy
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceStateNetworkPolicy
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_network_policy

        Reference to the Network policy profile number'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_network_policy
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceStateNetworkPolicy
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_network_policy

        Reference to the Network policy profile number'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/openconfig-lldp-ext:suppress-tlv-advertisement:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_state_suppress_tlv_advertisement'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_suppress_tlv_advertisement
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceStateSuppressTlvAdvertisement
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_suppress_tlv_advertisement
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceStateSuppressTlvAdvertisement
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_suppress_tlv_advertisement

        Indicates whether the local system should suppress the

        advertisement of particular TLVs with the LLDP PDUs that it

        transmits. Where a TLV type is specified within this list, it

        should not be included in any LLDP PDU transmitted by the

        local agent.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/openconfig-lldp-ext:allowed-vlans:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_state_allowed_vlans'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_allowed_vlans
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceStateAllowedVlans
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_allowed_vlans
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceStateAllowedVlans
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_allowed_vlans

        Specify VLANs, or ranges thereof, for which the interface will

        send vlan-name TLV. Ranges are specified in the form

        x..y, where x<y - ranges are assumed to be inclusive (such

        that the VLAN range is x <= range <= y.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/openconfig-lldp-ext:vlan-name-tlv-count:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_state_vlan_name_tlv_count'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_vlan_name_tlv_count
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceStateVlanNameTlvCount
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_vlan_name_tlv_count

        Maximum number of Vlan-name TLVs that can be transmitted'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_vlan_name_tlv_count
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceStateVlanNameTlvCount
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_vlan_name_tlv_count

        Maximum number of Vlan-name TLVs that can be transmitted'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/state/openconfig-lldp-ext:mode:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_state_mode'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_mode
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceStateMode
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_state_mode

        RX/TX mode for LLDP frames'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_mode
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceStateMode
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_state_mode

        RX/TX mode for LLDP frames'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighbors
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors

        Enclosing container for list of LLDP neighbors on an

        interface'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighbors
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors

        Enclosing container for list of LLDP neighbors on an

        interface'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighbor
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor

        List of LLDP neighbors'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighbor
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor

        List of LLDP neighbors'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor
      x-operationIdCamelCase: GetListOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighbor
      description: 'OperationId: get_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor

        List of LLDP neighbors'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor
      x-operationIdCamelCase: HeadListOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighbor
      description: 'OperationId: head_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor

        List of LLDP neighbors'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/id:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_id'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_id
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborId
      description: "OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_id\n "
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_id
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborId
      description: "OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_id\n "
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborState
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state

        Operational state data '
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborState
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state

        Operational state data '
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/system-name:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_name
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateSystemName
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_name
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateSystemName
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_name

        The system name field shall contain an alpha-numeric string

        that indicates the system''s administratively assigned name.

        The system name should be the system''s fully qualified domain

        name. If implementations support IETF RFC 3418, the sysName

        object should be used for this field.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/system-description:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_description'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_description
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateSystemDescription
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_description
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateSystemDescription
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_description

        The system description field shall contain an alpha-numeric

        string that is the textual description of the network entity.

        The system description should include the full name and

        version identification of the system''s hardware type,

        software operating system, and networking software. If

        implementations support IETF RFC 3418, the sysDescr object

        should be used for this field.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/chassis-id:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateChassisId
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id

        The Chassis ID is a mandatory TLV which identifies the

        chassis component of the endpoint identifier associated with

        the transmitting LLDP agent'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateChassisId
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id

        The Chassis ID is a mandatory TLV which identifies the

        chassis component of the endpoint identifier associated with

        the transmitting LLDP agent'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/chassis-id-type:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id_type
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateChassisIdType
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id_type

        This field identifies the format and source of the chassis

        identifier string. It is an enumerator defined by the

        LldpChassisIdSubtype object from IEEE 802.1AB MIB.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id_type
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateChassisIdType
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id_type

        This field identifies the format and source of the chassis

        identifier string. It is an enumerator defined by the

        LldpChassisIdSubtype object from IEEE 802.1AB MIB.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/id:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_id'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_id
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateId
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_id

        System generated identifier for the neighbor on the

        interface.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_id
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateId
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_id

        System generated identifier for the neighbor on the

        interface.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/ttl:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_ttl'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_ttl
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateTtl
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_ttl

        The time-to-live (TTL) is a mandatory TLV which indicates

        how long information from the neighbor should be considered

        valid.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_ttl
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateTtl
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_ttl

        The time-to-live (TTL) is a mandatory TLV which indicates

        how long information from the neighbor should be considered

        valid.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/port-id:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStatePortId
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id

        The Port ID is a mandatory TLV which identifies the port

        component of the endpoint identifier associated with the

        transmitting LLDP agent. If the specified port is an IEEE

        802.3 Repeater port, then this TLV is optional.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStatePortId
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id

        The Port ID is a mandatory TLV which identifies the port

        component of the endpoint identifier associated with the

        transmitting LLDP agent. If the specified port is an IEEE

        802.3 Repeater port, then this TLV is optional.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/port-id-type:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id_type
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStatePortIdType
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id_type

        This field identifies the format and source of the port

        identifier string. It is an enumerator defined by the

        PtopoPortIdType object from RFC2922.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id_type
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStatePortIdType
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id_type

        This field identifies the format and source of the port

        identifier string. It is an enumerator defined by the

        PtopoPortIdType object from RFC2922.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/port-description:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_description'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_description
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStatePortDescription
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_description

        The binary string containing the actual port identifier for

        the port which this LLDP PDU was transmitted. The source and

        format of this field is defined by PtopoPortId from

        RFC2922.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_description
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStatePortDescription
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_description

        The binary string containing the actual port identifier for

        the port which this LLDP PDU was transmitted. The source and

        format of this field is defined by PtopoPortId from

        RFC2922.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/state/management-address:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_management_address'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_management_address
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateManagementAddress
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_management_address

        The Management Address is a mandatory TLV which identifies a

        network address associated with the local LLDP agent, which

        can be used to reach the agent on the port identified in the

        Port ID TLV.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_management_address
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborStateManagementAddress
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_management_address

        The Management Address is a mandatory TLV which identifies a

        network address associated with the local LLDP agent, which

        can be used to reach the agent on the port identified in the

        Port ID TLV.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvs
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs

        Enclosing container for list of custom TLVs from a

        neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvs
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs

        Enclosing container for list of custom TLVs from a

        neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlv
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv

        List of custom LLDP TLVs from a neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlv
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv

        List of custom LLDP TLVs from a neighbor'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv
      x-operationIdCamelCase: GetListOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlv
      description: 'OperationId: get_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv

        List of custom LLDP TLVs from a neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv
      x-operationIdCamelCase: HeadListOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlv
      description: 'OperationId: head_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv

        List of custom LLDP TLVs from a neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}/type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_type
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvType
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_type

        Reference to type list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_type
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvType
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_type

        Reference to type list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}/oui
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvOui
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui

        Reference to oui list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvOui
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui

        Reference to oui list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}/oui-subtype
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui_subtype'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui_subtype
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvOuiSubtype
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui_subtype

        Reference to oui-subtype list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui_subtype
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvOuiSubtype
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui_subtype

        Reference to oui-subtype list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}/state
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvState
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state

        Operational state data '
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvState
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state

        Operational state data '
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}/state/type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_type
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvStateType
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_type

        The integer value identifying the type of information

        contained in the value field.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_type
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvStateType
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_type

        The integer value identifying the type of information

        contained in the value field.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}/state/oui
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvStateOui
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui

        The organizationally unique identifier field shall contain

        the organization''s OUI as defined in Clause 9 of IEEE Std

        802. The high-order octet is 0 and the low-order 3 octets

        are the SMI Network Management Private Enterprise Code of

        the Vendor in network byte order, as defined in the

        ''Assigned Numbers'' RFC [RFC3232].'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvStateOui
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui

        The organizationally unique identifier field shall contain

        the organization''s OUI as defined in Clause 9 of IEEE Std

        802. The high-order octet is 0 and the low-order 3 octets

        are the SMI Network Management Private Enterprise Code of

        the Vendor in network byte order, as defined in the

        ''Assigned Numbers'' RFC [RFC3232].'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}/state/oui-subtype
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui_subtype'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui_subtype
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvStateOuiSubtype
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui_subtype

        The organizationally defined subtype field shall contain a

        unique subtype value assigned by the defining organization.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui_subtype
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvStateOuiSubtype
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui_subtype

        The organizationally defined subtype field shall contain a

        unique subtype value assigned by the defining organization.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/custom-tlvs/tlv={type},{oui},{oui-subtype}/state/value
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_value'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_value
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvStateValue
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_value

        A variable-length octet-string containing the

        instance-specific information for this TLV.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_value
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCustomTlvsTlvStateValue
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_value

        A variable-length octet-string containing the

        instance-specific information for this TLV.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/capabilities:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilities
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities

        Enclosing container for list of LLDP capabilities'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilities
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities

        Enclosing container for list of LLDP capabilities'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/capabilities/capability={name1}:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapability
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability

        List of LLDP system capabilities advertised by the

        neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapability
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability

        List of LLDP system capabilities advertised by the

        neighbor'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/capabilities/capability:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability
      x-operationIdCamelCase: GetListOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapability
      description: 'OperationId: get_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability

        List of LLDP system capabilities advertised by the

        neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability
      x-operationIdCamelCase: HeadListOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapability
      description: 'OperationId: head_list_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability

        List of LLDP system capabilities advertised by the

        neighbor'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/capabilities/capability={name1}/name:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_name
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapabilityName
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_name

        Reference to capabilities list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_name
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapabilityName
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_name

        Reference to capabilities list key'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/capabilities/capability={name1}/state:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapabilityState
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state

        Operational state data for LLDP capabilities'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapabilityState
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state

        Operational state data for LLDP capabilities'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/capabilities/capability={name1}/state/name
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_name
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapabilityStateName
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_name

        Name of the system capability advertised by the neighbor.

        Capabilities are represented in a bitmap that defines the

        primary functions of the system. The capabilities are

        defined in IEEE 802.1AB.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_name
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapabilityStateName
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_name

        Name of the system capability advertised by the neighbor.

        Capabilities are represented in a bitmap that defines the

        primary functions of the system. The capabilities are

        defined in IEEE 802.1AB.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/capabilities/capability={name1}/state/enabled
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_enabled'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_enabled
      x-operationIdCamelCase: GetOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapabilityStateEnabled
      description: 'OperationId: get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_enabled

        Indicates whether the corresponding system capability is

        enabled on the neighbor.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_enabled
      x-operationIdCamelCase: HeadOpenconfigLldpLldpInterfacesInterfaceNeighborsNeighborCapabilitiesCapabilityStateEnabled
      description: 'OperationId: head_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_enabled

        Indicates whether the corresponding system capability is

        enabled on the neighbor.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanName
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name

        Enclosing container for the list of instances(with the

        same OUI and sub-type) of vlan-name TLV from a neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanName
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name

        Enclosing container for the list of instances(with the

        same OUI and sub-type) of vlan-name TLV from a neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlv
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv

        List of vlan-name TLVs from a neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlv
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv

        List of vlan-name TLVs from a neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv
      x-operationIdCamelCase: GetListOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlv
      description: 'OperationId: get_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv

        List of vlan-name TLVs from a neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv
      x-operationIdCamelCase: HeadListOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlv
      description: 'OperationId: head_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv

        List of vlan-name TLVs from a neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_type
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvType
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_type

        Reference to type list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_type
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvType
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_type

        Reference to type list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/oui
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvOui
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui

        Reference to oui list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvOui
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui

        Reference to oui list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/oui-subtype
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui_subtype'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui_subtype
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvOuiSubtype
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui_subtype

        Reference to oui-subtype list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui_subtype
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvOuiSubtype
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui_subtype

        Reference to oui-subtype list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/vlan-id
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_vlan_id'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_vlan_id
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvVlanId
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_vlan_id

        Reference to vlan-id list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_vlan_id
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvVlanId
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_vlan_id

        Reference to vlan-id list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/state
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvState
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state

        Operational state data '
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvState
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state

        Operational state data '
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/state/type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_type
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateType
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_type

        The integer value identifying the type of information

        contained in the value field.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_type
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateType
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_type

        The integer value identifying the type of information

        contained in the value field.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/state/oui
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateOui
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui

        The organizationally unique identifier field shall contain

        the organization''s OUI as defined in Clause 9 of IEEE Std

        802. The high-order octet is 0 and the low-order 3 octets

        are the SMI Network Management Private Enterprise Code of

        the Vendor in network byte order, as defined in the

        ''Assigned Numbers'' RFC [RFC3232].'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateOui
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui

        The organizationally unique identifier field shall contain

        the organization''s OUI as defined in Clause 9 of IEEE Std

        802. The high-order octet is 0 and the low-order 3 octets

        are the SMI Network Management Private Enterprise Code of

        the Vendor in network byte order, as defined in the

        ''Assigned Numbers'' RFC [RFC3232].'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/state/oui-subtype
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui_subtype'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui_subtype
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateOuiSubtype
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui_subtype

        The organizationally defined subtype field shall contain a

        unique subtype value assigned by the defining organization.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui_subtype
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateOuiSubtype
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui_subtype

        The organizationally defined subtype field shall contain a

        unique subtype value assigned by the defining organization.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/state/vlan-id
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_vlan_id'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_vlan_id
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateVlanId
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_vlan_id

        VLAN ID contained in the VLAN Name TLV.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_vlan_id
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateVlanId
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_vlan_id

        VLAN ID contained in the VLAN Name TLV.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:custom-tlvs-vlan-name/vlan-name-tlv={type},{oui},{oui-subtype},{vlan-id}/state/value
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_value'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_value
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateValue
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_value

        VLAN Name contained in the VLAN Name TLV.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
        description: Reference to type list key
      - name: oui
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui list key
      - name: oui-subtype
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to oui-subtype list key
      - name: vlan-id
        in: path
        required: true
        schema:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
        description: Reference to vlan-id list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_value
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborCustomTlvsVlanNameVlanNameTlvStateValue
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_value

        VLAN Name contained in the VLAN Name TLV.'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPower
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power

        Container for LLDP Power via MDI TLVs'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPower
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power

        Container for LLDP Power via MDI TLVs'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerState
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state

        Operational state container'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerState
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state

        Operational state container'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/device-type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_device_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_device_type
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateDeviceType
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_device_type

        Defines the type of Power-via-MDI (Power over Ethernet) advertised by the
        device'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_device_type
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateDeviceType
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_device_type

        Defines the type of Power-via-MDI (Power over Ethernet) advertised by the
        device'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-supported
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_supported'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_supported
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerSupported
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_supported

        Defines MDI power support'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_supported
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerSupported
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_supported

        Defines MDI power support'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-enabled
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_enabled'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_enabled
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerEnabled
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_enabled

        Defines MDI power admin enabled'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_enabled
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerEnabled
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_enabled

        Defines MDI power admin enabled'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/pair-control
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pair_control'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pair_control
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePairControl
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pair_control

        Defines that the device has the capability

        to control the power pairs'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pair_control
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePairControl
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pair_control

        Defines that the device has the capability

        to control the power pairs'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-pair
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_pair'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_pair
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerPair
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_pair

        Defines the type of power pairs in use'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_pair
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerPair
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_pair

        Defines the type of power pairs in use'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-class
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerClass
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class

        Defines the PD provided information that

        allows a PSE to classify their power requirements.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerClass
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class

        Defines the PD provided information that

        allows a PSE to classify their power requirements.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerType
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type

        Defines the PD Power Type.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerType
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type

        Defines the PD Power Type.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/pd-power-source
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_source'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_source
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePdPowerSource
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_source

        Defines the type of Power Source advertised'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_source
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePdPowerSource
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_source

        Defines the type of Power Source advertised'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/pse-power-source
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_source'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_source
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePsePowerSource
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_source

        Defines the type of Power Source advertised '
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_source
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePsePowerSource
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_source

        Defines the type of Power Source advertised '
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-priority
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_priority'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_priority
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerPriority
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_priority

        Defines the Power priority of PD/PSE'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_priority
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerPriority
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_priority

        Defines the Power priority of PD/PSE'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/requested-power
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateRequestedPower
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power

        Defines the PD requested power value'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateRequestedPower
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power

        Defines the PD requested power value'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/allocated-power
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateAllocatedPower
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power

        Defines the PSE allocated power value'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateAllocatedPower
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power

        Defines the PSE allocated power value'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/tlv-type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_tlv_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_tlv_type
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateTlvType
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_tlv_type

        AT/BT Tlv type'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_tlv_type
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateTlvType
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_tlv_type

        AT/BT Tlv type'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/requested-power-a
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_a'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_a
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateRequestedPowerA
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_a

        Defines the PD requested power value for mode A'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_a
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateRequestedPowerA
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_a

        Defines the PD requested power value for mode A'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/requested-power-b
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_b'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_b
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateRequestedPowerB
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_b

        Defines the PD requested power value for mode B'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_b
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateRequestedPowerB
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_b

        Defines the PD requested power value for mode B'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/allocated-power-a
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_a'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_a
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateAllocatedPowerA
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_a

        Defines the PSE allocated power value Alternative A'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_a
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateAllocatedPowerA
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_a

        Defines the PSE allocated power value Alternative A'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/allocated-power-b
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_b'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_b
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateAllocatedPowerB
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_b

        Defines the PSE allocated power value Alternative B'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_b
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStateAllocatedPowerB
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_b

        Defines the PSE allocated power value Alternative B'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/pd-power-status
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_status'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_status
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePdPowerStatus
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_status

        PD powered status'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_status
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePdPowerStatus
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_status

        PD powered status'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/pse-power-pairs-ext
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_pairs_ext'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_pairs_ext
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePsePowerPairsExt
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_pairs_ext

        PSE power pairs ext'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_pairs_ext
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePsePowerPairsExt
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_pairs_ext

        PSE power pairs ext'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-class-ext-a
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_a'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_a
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerClassExtA
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_a

        Dual-signature power Class ext Mode A'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_a
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerClassExtA
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_a

        Dual-signature power Class ext Mode A'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-class-ext-b
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_b'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_b
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerClassExtB
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_b

        Dual-signature power Class ext Mode B'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_b
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerClassExtB
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_b

        Dual-signature power Class ext Mode B'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-class-ext
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerClassExt
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext

        Power Class extension'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerClassExt
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext

        Power Class extension'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/power-type-ext
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type_ext'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type_ext
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerTypeExt
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type_ext

        Power Class extension'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type_ext
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePowerTypeExt
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type_ext

        Power Class extension'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:mdi-power/state/pd-load
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_load'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_load
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePdLoad
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_load

        PD Load'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_load
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMdiPowerStatePdLoad
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_load

        PD Load'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMed
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med

        Container for LLDP-MED TLVs'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMed
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med

        Container for LLDP-MED TLVs'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedState
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state

        Operational state container'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedState
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state

        Operational state container'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/device-class
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_device_class'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_device_class
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateDeviceClass
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_device_class

        Indicates whether the sender is a Network Connectivity Device or Endpoint
        Device'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_device_class
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateDeviceClass
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_device_class

        Indicates whether the sender is a Network Connectivity Device or Endpoint
        Device'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/extended-mdi-power
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPower
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power

        Operational state data for MED extended power parameters'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPower
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power

        Operational state data for MED extended power parameters'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/extended-mdi-power/device-type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_device_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_device_type
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerDeviceType
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_device_type

        Defines the type of Power-via-MDI

        (Power over Ethernet) advertised by the device'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_device_type
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerDeviceType
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_device_type

        Defines the type of Power-via-MDI

        (Power over Ethernet) advertised by the device'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/extended-mdi-power/pd-power-source
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pd_power_source'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pd_power_source
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerPdPowerSource
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pd_power_source

        Defines the type of Power Source advertised'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pd_power_source
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerPdPowerSource
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pd_power_source

        Defines the type of Power Source advertised'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/extended-mdi-power/pse-power-source
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pse_power_source'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pse_power_source
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerPsePowerSource
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pse_power_source

        Defines the type of Power Source advertised '
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pse_power_source
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerPsePowerSource
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pse_power_source

        Defines the type of Power Source advertised '
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/extended-mdi-power/power-priority
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_priority'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_priority
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerPowerPriority
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_priority

        Defines the Power priority of PD/PSE'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_priority
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerPowerPriority
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_priority

        Defines the Power priority of PD/PSE'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/extended-mdi-power/power-value
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_value'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_value
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerPowerValue
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_value

        Defines the Power value of PD/PSE'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_value
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateExtendedMdiPowerPowerValue
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_value

        Defines the Power value of PD/PSE'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/inventory:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventory
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory

        Operational state data for MED inventory parameters'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventory
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory

        Operational state data for MED inventory parameters'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/inventory/hardware-revision
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_hardware_revision'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_hardware_revision
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryHardwareRevision
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_hardware_revision

        Hardware revision of the endpoint'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_hardware_revision
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryHardwareRevision
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_hardware_revision

        Hardware revision of the endpoint'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/inventory/firmware-revision
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_firmware_revision'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_firmware_revision
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryFirmwareRevision
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_firmware_revision

        Firmware revision of the endpoint'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_firmware_revision
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryFirmwareRevision
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_firmware_revision

        Firmware revision of the endpoint'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/inventory/software-revision
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_software_revision'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_software_revision
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventorySoftwareRevision
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_software_revision

        Software revision of the endpoint'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_software_revision
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventorySoftwareRevision
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_software_revision

        Software revision of the endpoint'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/inventory/serial-number
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_serial_number'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_serial_number
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventorySerialNumber
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_serial_number

        Serial number of the endpoint'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_serial_number
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventorySerialNumber
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_serial_number

        Serial number of the endpoint'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/inventory/manufacturer
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_manufacturer'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_manufacturer
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryManufacturer
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_manufacturer

        Manufacturer name of the endpoint'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_manufacturer
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryManufacturer
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_manufacturer

        Manufacturer name of the endpoint'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/inventory/model
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_model'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_model
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryModel
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_model

        Model name of the endpoint'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_model
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryModel
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_model

        Model name of the endpoint'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/state/inventory/asset-id
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_asset_id'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_asset_id
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryAssetId
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_asset_id

        Asset identifier of the endpoint'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_asset_id
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedStateInventoryAssetId
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_asset_id

        Asset identifier of the endpoint'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPolicies
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies

        Enclosing container for list of LLDP-MED network policy capabilities'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPolicies
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies

        Enclosing container for list of LLDP-MED network policy capabilities'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy={type}
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicy
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy

        List of LLDP-MED network policy application advertised by the

        neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicy
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy

        List of LLDP-MED network policy application advertised by the

        neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy
      x-operationIdCamelCase: GetListOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicy
      description: 'OperationId: get_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy

        List of LLDP-MED network policy application advertised by the

        neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy
      x-operationIdCamelCase: HeadListOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicy
      description: 'OperationId: head_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy

        List of LLDP-MED network policy application advertised by the

        neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy={type}/type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_type
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyType
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_type

        Reference to application list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_type
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyType
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_type

        Reference to application list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy={type}/state
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyState
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state

        Operational state data for LLDP-MED network policy'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyState
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state

        Operational state data for LLDP-MED network policy'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy={type}/state/type
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_type'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_type
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStateType
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_type

        The media type that defines the primary function of the

        application for the policy advertised by an endpoint'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_type
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStateType
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_type

        The media type that defines the primary function of the

        application for the policy advertised by an endpoint'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy={type}/state/vlan-id
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_vlan_id'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_vlan_id
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStateVlanId
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_vlan_id

        An extension of the VLAN Identifier for the port, as defined in IEEE 802.1P-1998.

        A value of 1 through 4094 is used to define a valid PVID.

        A value of 0 shall be used if the device is using priority tagged frames,

        meaning that only the 802.1p priority level is significant and the default
        VID

        of the ingress port is being used instead'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_vlan_id
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStateVlanId
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_vlan_id

        An extension of the VLAN Identifier for the port, as defined in IEEE 802.1P-1998.

        A value of 1 through 4094 is used to define a valid PVID.

        A value of 0 shall be used if the device is using priority tagged frames,

        meaning that only the 802.1p priority level is significant and the default
        VID

        of the ingress port is being used instead'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy={type}/state/tagged
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_tagged'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_tagged
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStateTagged
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_tagged

        A value of ''true'' indicates that the application is using a tagged VLAN.

        A value of ''false'' indicates that for the specific application the device
        either

        is using an untagged VLAN or does not support port based VLAN operation.

        In this case, both the VLAN ID and the Layer 2 priority fields are ignored
        and

        only the DSCP value has relevance'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_tagged
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStateTagged
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_tagged

        A value of ''true'' indicates that the application is using a tagged VLAN.

        A value of ''false'' indicates that for the specific application the device
        either

        is using an untagged VLAN or does not support port based VLAN operation.

        In this case, both the VLAN ID and the Layer 2 priority fields are ignored
        and

        only the DSCP value has relevance'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy={type}/state/priority
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_priority'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_priority
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStatePriority
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_priority

        Layer 2 priority class of service (CoS) for the configured VLAN'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_priority
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStatePriority
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_priority

        Layer 2 priority class of service (CoS) for the configured VLAN'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/network-policies/network-policy={type}/state/dscp
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_dscp'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_dscp
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStateDscp
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_dscp

        DSCP value for the configured VLAN'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: type
        in: path
        required: true
        schema:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to application list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_dscp
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedNetworkPoliciesNetworkPolicyStateDscp
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_dscp

        DSCP value for the configured VLAN'
  /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/capabilities:
    get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilities
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities

        Enclosing container for list of LLDP-MED capabilities'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilities
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities

        Enclosing container for list of LLDP-MED capabilities'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/capabilities/capability={name1}
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapability
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability

        List of LLDP-MED capabilities advertised by the

        neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapability
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability

        List of LLDP-MED capabilities advertised by the

        neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/capabilities/capability
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: get_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability
      x-operationIdCamelCase: GetListOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapability
      description: 'OperationId: get_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability

        List of LLDP-MED capabilities advertised by the

        neighbor'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-config: 'false'
      operationId: head_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability
      x-operationIdCamelCase: HeadListOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapability
      description: 'OperationId: head_list_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability

        List of LLDP-MED capabilities advertised by the

        neighbor'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/capabilities/capability={name1}/name
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_name
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapabilityName
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_name

        Reference to capabilities list key'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_name
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapabilityName
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_name

        Reference to capabilities list key'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/capabilities/capability={name1}/state
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapabilityState
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state

        Operational state data for LLDP-MED capabilities'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapabilityState
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state

        Operational state data for LLDP-MED capabilities'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/capabilities/capability={name1}/state/name
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_name'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_name
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapabilityStateName
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_name

        Name of the MED capability advertised by the neighbor.

        Capabilities are represented in a bitmap and are

        defined in ANSI/TIA-1057.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_name
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapabilityStateName
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_name

        Name of the MED capability advertised by the neighbor.

        Capabilities are represented in a bitmap and are

        defined in ANSI/TIA-1057.'
  ? /restconf/data/openconfig-lldp:lldp/interfaces/interface={name}/neighbors/neighbor={id}/openconfig-lldp-ext:med/capabilities/capability={name1}/state/enabled
  : get:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          content:
            application/yang-data+json:
              schema:
                $ref: '#/components/schemas/get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_enabled'
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_enabled
      x-operationIdCamelCase: GetOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapabilityStateEnabled
      description: 'OperationId: get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_enabled

        Indicates whether the corresponding MED capability is

        enabled on the neighbor.'
    head:
      tags:
      - openconfig-lldp
      parameters:
      - name: name
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: Reference to the list key
      - name: id
        in: path
        required: true
        schema:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
        description: ' '
      - name: name1
        in: path
        required: true
        schema:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
        description: Reference to capabilities list key
      responses:
        '200':
          description: Ok
        '400':
          description: Bad request
        '401':
          description: Unauthorized
        '404':
          description: Not Found
        '405':
          description: Method Not Allowed
        '415':
          description: Unsupported Media Type
        '500':
          description: Internal Server Error
      x-params:
        varMapping:
        - uriName: name
          yangName: name
        - uriName: id
          yangName: id
        - uriName: name1
          yangName: name
      x-config: 'false'
      operationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_enabled
      x-operationIdCamelCase: HeadOpenconfigLldpExtLldpInterfacesInterfaceNeighborsNeighborMedCapabilitiesCapabilityStateEnabled
      description: 'OperationId: head_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_enabled

        Indicates whether the corresponding MED capability is

        enabled on the neighbor.'
components:
  securitySchemes:
    basic:
      scheme: basic
      type: http
    bearer:
      bearerFormat: JWT
      scheme: bearer
      type: http
  schemas:
    openconfig_lldp_lldp:
      type: object
      properties:
        openconfig-lldp:lldp:
          type: object
          properties:
            config:
              type: object
              properties:
                enabled:
                  default: 'true'
                  format: boolean
                  type: boolean
                  x-yang-type: boolean
                hello-timer:
                  format: int64
                  maximum: 18446744073709551615
                  minimum: 0
                  type: string
                  x-yang-type: uint64
                suppress-tlv-advertisement:
                  type: array
                  items:
                    enum:
                    - SYSTEM_DESCRIPTION
                    - MANAGEMENT_ADDRESS
                    - MED_NETWORK_POLICY
                    - SYSTEM_NAME
                    - PORT_VLAN_ID
                    - VLAN_NAME
                    - LINK_AGGREGATION
                    - MED_EXT_MDI_POWER
                    - CHASSIS_ID
                    - MDI_POWER
                    - MAX_FRAME_SIZE
                    - PORT_ID
                    - SYSTEM_CAPABILITIES
                    - PORT_DESCRIPTION
                    format: string
                    type: string
                    x-yang-type: identityref
                system-name:
                  maxLength: 255
                  minLength: 0
                  type: string
                  x-length: 0..255
                  x-yang-type: string
                system-description:
                  maxLength: 255
                  minLength: 0
                  type: string
                  x-length: 0..255
                  x-yang-type: string
                openconfig-lldp-ext:multiplier:
                  format: int32
                  maximum: 10
                  minimum: 1
                  type: integer
                  x-range: 1..10
                  x-yang-type: uint8
                openconfig-lldp-ext:mode:
                  enum:
                  - RECEIVE
                  - TRANSMIT
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
            interfaces:
              type: object
              properties:
                interface:
                  type: array
                  items:
                    type: object
                    required:
                    - name
                    properties:
                      name:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      config:
                        type: object
                        properties:
                          name:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          enabled:
                            default: 'true'
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
                          openconfig-lldp-ext:management-address-ipv4:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                            x-yang-type: string
                          openconfig-lldp-ext:management-address-ipv6:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                            x-yang-type: string
                          openconfig-lldp-ext:network-policy:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          openconfig-lldp-ext:suppress-tlv-advertisement:
                            type: array
                            items:
                              enum:
                              - SYSTEM_DESCRIPTION
                              - MANAGEMENT_ADDRESS
                              - MED_NETWORK_POLICY
                              - SYSTEM_NAME
                              - PORT_VLAN_ID
                              - VLAN_NAME
                              - LINK_AGGREGATION
                              - MED_EXT_MDI_POWER
                              - CHASSIS_ID
                              - MDI_POWER
                              - MAX_FRAME_SIZE
                              - PORT_ID
                              - SYSTEM_CAPABILITIES
                              - PORT_DESCRIPTION
                              format: string
                              type: string
                              x-yang-type: identityref
                          openconfig-lldp-ext:allowed-vlans:
                            type: array
                            items:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                          openconfig-lldp-ext:vlan-name-tlv-count:
                            default: 10
                            format: int32
                            maximum: 128
                            minimum: 1
                            type: integer
                            x-range: 1..128
                            x-yang-type: uint16
                          openconfig-lldp-ext:mode:
                            enum:
                            - RECEIVE
                            - TRANSMIT
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
    post_openconfig_lldp_lldp:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp'
    put_openconfig_lldp_lldp:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp'
    patch_openconfig_lldp_lldp:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp'
    get_openconfig_lldp_lldp:
      type: object
      properties:
        openconfig-lldp:lldp:
          type: object
          properties:
            config:
              type: object
              properties:
                enabled:
                  default: 'true'
                  format: boolean
                  type: boolean
                  x-yang-type: boolean
                hello-timer:
                  format: int64
                  maximum: 18446744073709551615
                  minimum: 0
                  type: string
                  x-yang-type: uint64
                suppress-tlv-advertisement:
                  type: array
                  items:
                    enum:
                    - SYSTEM_DESCRIPTION
                    - MANAGEMENT_ADDRESS
                    - MED_NETWORK_POLICY
                    - SYSTEM_NAME
                    - PORT_VLAN_ID
                    - VLAN_NAME
                    - LINK_AGGREGATION
                    - MED_EXT_MDI_POWER
                    - CHASSIS_ID
                    - MDI_POWER
                    - MAX_FRAME_SIZE
                    - PORT_ID
                    - SYSTEM_CAPABILITIES
                    - PORT_DESCRIPTION
                    format: string
                    type: string
                    x-yang-type: identityref
                system-name:
                  maxLength: 255
                  minLength: 0
                  type: string
                  x-length: 0..255
                  x-yang-type: string
                system-description:
                  maxLength: 255
                  minLength: 0
                  type: string
                  x-length: 0..255
                  x-yang-type: string
                openconfig-lldp-ext:multiplier:
                  format: int32
                  maximum: 10
                  minimum: 1
                  type: integer
                  x-range: 1..10
                  x-yang-type: uint8
                openconfig-lldp-ext:mode:
                  enum:
                  - RECEIVE
                  - TRANSMIT
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
            state:
              type: object
              properties:
                enabled:
                  default: 'true'
                  format: boolean
                  type: boolean
                  x-yang-type: boolean
                hello-timer:
                  format: int64
                  maximum: 18446744073709551615
                  minimum: 0
                  type: string
                  x-yang-type: uint64
                suppress-tlv-advertisement:
                  type: array
                  items:
                    enum:
                    - SYSTEM_DESCRIPTION
                    - MANAGEMENT_ADDRESS
                    - MED_NETWORK_POLICY
                    - SYSTEM_NAME
                    - PORT_VLAN_ID
                    - VLAN_NAME
                    - LINK_AGGREGATION
                    - MED_EXT_MDI_POWER
                    - CHASSIS_ID
                    - MDI_POWER
                    - MAX_FRAME_SIZE
                    - PORT_ID
                    - SYSTEM_CAPABILITIES
                    - PORT_DESCRIPTION
                    format: string
                    type: string
                    x-yang-type: identityref
                system-name:
                  maxLength: 255
                  minLength: 0
                  type: string
                  x-length: 0..255
                  x-yang-type: string
                system-description:
                  maxLength: 255
                  minLength: 0
                  type: string
                  x-length: 0..255
                  x-yang-type: string
                openconfig-lldp-ext:multiplier:
                  format: int32
                  maximum: 10
                  minimum: 1
                  type: integer
                  x-range: 1..10
                  x-yang-type: uint8
                openconfig-lldp-ext:mode:
                  enum:
                  - RECEIVE
                  - TRANSMIT
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
            interfaces:
              type: object
              properties:
                interface:
                  type: array
                  items:
                    type: object
                    required:
                    - name
                    properties:
                      name:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      config:
                        type: object
                        properties:
                          name:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          enabled:
                            default: 'true'
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
                          openconfig-lldp-ext:management-address-ipv4:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                            x-yang-type: string
                          openconfig-lldp-ext:management-address-ipv6:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                            x-yang-type: string
                          openconfig-lldp-ext:network-policy:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          openconfig-lldp-ext:suppress-tlv-advertisement:
                            type: array
                            items:
                              enum:
                              - SYSTEM_DESCRIPTION
                              - MANAGEMENT_ADDRESS
                              - MED_NETWORK_POLICY
                              - SYSTEM_NAME
                              - PORT_VLAN_ID
                              - VLAN_NAME
                              - LINK_AGGREGATION
                              - MED_EXT_MDI_POWER
                              - CHASSIS_ID
                              - MDI_POWER
                              - MAX_FRAME_SIZE
                              - PORT_ID
                              - SYSTEM_CAPABILITIES
                              - PORT_DESCRIPTION
                              format: string
                              type: string
                              x-yang-type: identityref
                          openconfig-lldp-ext:allowed-vlans:
                            type: array
                            items:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                          openconfig-lldp-ext:vlan-name-tlv-count:
                            default: 10
                            format: int32
                            maximum: 128
                            minimum: 1
                            type: integer
                            x-range: 1..128
                            x-yang-type: uint16
                          openconfig-lldp-ext:mode:
                            enum:
                            - RECEIVE
                            - TRANSMIT
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                      state:
                        type: object
                        properties:
                          name:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          enabled:
                            default: 'true'
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
                          counters:
                            type: object
                            properties:
                              frame-in:
                                format: int64
                                maximum: 18446744073709551615
                                minimum: 0
                                type: string
                                x-yang-type: uint64
                              frame-out:
                                format: int64
                                maximum: 18446744073709551615
                                minimum: 0
                                type: string
                                x-yang-type: uint64
                              frame-discard:
                                format: int64
                                maximum: 18446744073709551615
                                minimum: 0
                                type: string
                                x-yang-type: uint64
                              tlv-unknown:
                                format: int64
                                maximum: 18446744073709551615
                                minimum: 0
                                type: string
                                x-yang-type: uint64
                              openconfig-lldp-ext:ageout:
                                format: int64
                                maximum: 18446744073709551615
                                minimum: 0
                                type: string
                                x-yang-type: uint64
                          openconfig-lldp-ext:management-address-ipv4:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                            x-yang-type: string
                          openconfig-lldp-ext:management-address-ipv6:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                            x-yang-type: string
                          openconfig-lldp-ext:network-policy:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          openconfig-lldp-ext:suppress-tlv-advertisement:
                            type: array
                            items:
                              enum:
                              - SYSTEM_DESCRIPTION
                              - MANAGEMENT_ADDRESS
                              - MED_NETWORK_POLICY
                              - SYSTEM_NAME
                              - PORT_VLAN_ID
                              - VLAN_NAME
                              - LINK_AGGREGATION
                              - MED_EXT_MDI_POWER
                              - CHASSIS_ID
                              - MDI_POWER
                              - MAX_FRAME_SIZE
                              - PORT_ID
                              - SYSTEM_CAPABILITIES
                              - PORT_DESCRIPTION
                              format: string
                              type: string
                              x-yang-type: identityref
                          openconfig-lldp-ext:allowed-vlans:
                            type: array
                            items:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                          openconfig-lldp-ext:vlan-name-tlv-count:
                            default: 10
                            format: int32
                            maximum: 128
                            minimum: 1
                            type: integer
                            x-range: 1..128
                            x-yang-type: uint16
                          openconfig-lldp-ext:mode:
                            enum:
                            - RECEIVE
                            - TRANSMIT
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                      neighbors:
                        type: object
                        properties:
                          neighbor:
                            type: array
                            items:
                              type: object
                              required:
                              - id
                              properties:
                                id:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                state:
                                  type: object
                                  properties:
                                    system-name:
                                      maxLength: 255
                                      minLength: 0
                                      type: string
                                      x-length: 0..255
                                      x-yang-type: string
                                    system-description:
                                      maxLength: 255
                                      minLength: 0
                                      type: string
                                      x-length: 0..255
                                      x-yang-type: string
                                    chassis-id:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    chassis-id-type:
                                      enum:
                                      - CHASSIS_COMPONENT
                                      - INTERFACE_ALIAS
                                      - PORT_COMPONENT
                                      - MAC_ADDRESS
                                      - NETWORK_ADDRESS
                                      - INTERFACE_NAME
                                      - LOCAL
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    id:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    ttl:
                                      format: int32
                                      maximum: 65535
                                      minimum: 0
                                      type: integer
                                      x-yang-type: uint16
                                    port-id:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    port-id-type:
                                      enum:
                                      - INTERFACE_ALIAS
                                      - PORT_COMPONENT
                                      - MAC_ADDRESS
                                      - NETWORK_ADDRESS
                                      - INTERFACE_NAME
                                      - AGENT_CIRCUIT_ID
                                      - LOCAL
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    port-description:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    management-address:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                custom-tlvs:
                                  type: object
                                  properties:
                                    tlv:
                                      type: array
                                      items:
                                        type: object
                                        required:
                                        - type
                                        - oui
                                        - oui-subtype
                                        properties:
                                          type:
                                            format: int32
                                            maximum: 2147483647
                                            minimum: -2147483648
                                            type: integer
                                            x-yang-type: int32
                                          oui:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          oui-subtype:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          state:
                                            type: object
                                            properties:
                                              type:
                                                format: int32
                                                maximum: 2147483647
                                                minimum: -2147483648
                                                type: integer
                                                x-yang-type: int32
                                              oui:
                                                maxLength: 18446744073709551615
                                                minLength: 0
                                                type: string
                                                x-yang-type: string
                                              oui-subtype:
                                                maxLength: 18446744073709551615
                                                minLength: 0
                                                type: string
                                                x-yang-type: string
                                              value:
                                                format: binary
                                                type: string
                                                x-yang-type: binary
                                capabilities:
                                  type: object
                                  properties:
                                    capability:
                                      type: array
                                      items:
                                        type: object
                                        required:
                                        - name
                                        properties:
                                          name:
                                            enum:
                                            - ROUTER
                                            - TELEPHONE
                                            - OTHER
                                            - REPEATER
                                            - DOCSIS_CABLE_DEVICE
                                            - STATION_ONLY
                                            - C_VLAN
                                            - S_VLAN
                                            - TWO_PORT_MAC_RELAY
                                            - WLAN_ACCESS_POINT
                                            - MAC_BRIDGE
                                            format: string
                                            type: string
                                            x-yang-type: identityref
                                          state:
                                            type: object
                                            properties:
                                              name:
                                                enum:
                                                - ROUTER
                                                - TELEPHONE
                                                - OTHER
                                                - REPEATER
                                                - DOCSIS_CABLE_DEVICE
                                                - STATION_ONLY
                                                - C_VLAN
                                                - S_VLAN
                                                - TWO_PORT_MAC_RELAY
                                                - WLAN_ACCESS_POINT
                                                - MAC_BRIDGE
                                                format: string
                                                type: string
                                                x-yang-type: identityref
                                              enabled:
                                                format: boolean
                                                type: boolean
                                                x-yang-type: boolean
                                openconfig-lldp-ext:custom-tlvs-vlan-name:
                                  type: object
                                  properties:
                                    vlan-name-tlv:
                                      type: array
                                      items:
                                        type: object
                                        required:
                                        - type
                                        - oui
                                        - oui-subtype
                                        - vlan-id
                                        properties:
                                          type:
                                            format: int32
                                            maximum: 2147483647
                                            minimum: -2147483648
                                            type: integer
                                            x-yang-type: int32
                                          oui:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          oui-subtype:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          vlan-id:
                                            format: int32
                                            maximum: 4094
                                            minimum: 1
                                            type: integer
                                            x-range: 1..4094
                                            x-yang-type: uint16
                                          state:
                                            type: object
                                            properties:
                                              type:
                                                format: int32
                                                maximum: 2147483647
                                                minimum: -2147483648
                                                type: integer
                                                x-yang-type: int32
                                              oui:
                                                maxLength: 18446744073709551615
                                                minLength: 0
                                                type: string
                                                x-yang-type: string
                                              oui-subtype:
                                                maxLength: 18446744073709551615
                                                minLength: 0
                                                type: string
                                                x-yang-type: string
                                              vlan-id:
                                                format: int32
                                                maximum: 4094
                                                minimum: 1
                                                type: integer
                                                x-range: 1..4094
                                                x-yang-type: uint16
                                              value:
                                                maxLength: 18446744073709551615
                                                minLength: 0
                                                type: string
                                                x-yang-type: string
                                openconfig-lldp-ext:mdi-power:
                                  type: object
                                  properties:
                                    state:
                                      type: object
                                      properties:
                                        device-type:
                                          enum:
                                          - PSE
                                          - PD
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-supported:
                                          format: boolean
                                          type: boolean
                                          x-yang-type: boolean
                                        power-enabled:
                                          format: boolean
                                          type: boolean
                                          x-yang-type: boolean
                                        pair-control:
                                          format: boolean
                                          type: boolean
                                          x-yang-type: boolean
                                        power-pair:
                                          enum:
                                          - SIGNAL
                                          - SPARE
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-class:
                                          enum:
                                          - CLASS0
                                          - CLASS1
                                          - CLASS2
                                          - CLASS3
                                          - CLASS4
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-type:
                                          enum:
                                          - TYPE1
                                          - TYPE2
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        pd-power-source:
                                          enum:
                                          - UNKNOWN
                                          - PSE
                                          - LOCAL
                                          - LOCAL_AND_PSE
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        pse-power-source:
                                          enum:
                                          - UNKNOWN
                                          - PRIMARY
                                          - BACKUP
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-priority:
                                          enum:
                                          - UNKNOWN
                                          - CRITICAL
                                          - HIGH
                                          - LOW
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        requested-power:
                                          format: int32
                                          maximum: 65535
                                          minimum: 0
                                          type: integer
                                          x-yang-type: uint16
                                        allocated-power:
                                          format: int32
                                          maximum: 65535
                                          minimum: 0
                                          type: integer
                                          x-yang-type: uint16
                                        tlv-type:
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        requested-power-a:
                                          format: int32
                                          maximum: 65535
                                          minimum: 0
                                          type: integer
                                          x-yang-type: uint16
                                        requested-power-b:
                                          format: int32
                                          maximum: 65535
                                          minimum: 0
                                          type: integer
                                          x-yang-type: uint16
                                        allocated-power-a:
                                          format: int32
                                          maximum: 65535
                                          minimum: 0
                                          type: integer
                                          x-yang-type: uint16
                                        allocated-power-b:
                                          format: int32
                                          maximum: 65535
                                          minimum: 0
                                          type: integer
                                          x-yang-type: uint16
                                        pd-power-status:
                                          enum:
                                          - UNKNOWN
                                          - 4_PAIR_DUAL_SIG_PD
                                          - 2_PAIR_DUAL_SIG_PD
                                          - SINGLE_SIG_PD
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        pse-power-pairs-ext:
                                          enum:
                                          - UNKNOWN
                                          - ALTERNATE_A
                                          - ALTERNATE_B
                                          - BOTH
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-class-ext-a:
                                          enum:
                                          - UNKNOWN
                                          - SINGLE_SIG
                                          - CLASS1
                                          - CLASS2
                                          - CLASS3
                                          - CLASS4
                                          - CLASS5
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-class-ext-b:
                                          enum:
                                          - UNKNOWN
                                          - SINGLE_SIG
                                          - CLASS1
                                          - CLASS2
                                          - CLASS3
                                          - CLASS4
                                          - CLASS5
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-class-ext:
                                          enum:
                                          - UNKNOWN
                                          - DUAL_SIG
                                          - CLASS1
                                          - CLASS2
                                          - CLASS3
                                          - CLASS4
                                          - CLASS5
                                          - CLASS6
                                          - CLASS7
                                          - CLASS8
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-type-ext:
                                          enum:
                                          - UNKNOWN
                                          - TYPE4_DUAL_SIG_PD
                                          - TYPE4_SINGLE_SIG_PD
                                          - TYPE3_DUAL_SIG_PD
                                          - TYPE3_SINGLE_SIG_PD
                                          - TYPE4_PSE
                                          - TYPE3_PSE
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        pd-load:
                                          format: boolean
                                          type: boolean
                                          x-yang-type: boolean
                                openconfig-lldp-ext:med:
                                  type: object
                                  properties:
                                    state:
                                      type: object
                                      properties:
                                        device-class:
                                          enum:
                                          - NOT_DEFINED
                                          - ENDPOINT_CLASS1
                                          - ENDPOINT_CLASS2
                                          - ENDPOINT_CLASS3
                                          - NETWORK_CONNECTIVITY
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        extended-mdi-power:
                                          type: object
                                          properties:
                                            device-type:
                                              enum:
                                              - PSE
                                              - PD
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            pd-power-source:
                                              enum:
                                              - UNKNOWN
                                              - PSE
                                              - LOCAL
                                              - LOCAL_AND_PSE
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            pse-power-source:
                                              enum:
                                              - UNKNOWN
                                              - PRIMARY
                                              - BACKUP
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            power-priority:
                                              enum:
                                              - UNKNOWN
                                              - CRITICAL
                                              - HIGH
                                              - LOW
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            power-value:
                                              format: int32
                                              maximum: 65535
                                              minimum: 0
                                              type: integer
                                              x-yang-type: uint16
                                        inventory:
                                          type: object
                                          properties:
                                            hardware-revision:
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            firmware-revision:
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            software-revision:
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            serial-number:
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            manufacturer:
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            model:
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                            asset-id:
                                              maxLength: 18446744073709551615
                                              minLength: 0
                                              type: string
                                              x-yang-type: string
                                    network-policies:
                                      type: object
                                      properties:
                                        network-policy:
                                          type: array
                                          items:
                                            type: object
                                            required:
                                            - type
                                            properties:
                                              type:
                                                enum:
                                                - VOICE
                                                - VOICE_SIGNALING
                                                maxLength: 18446744073709551615
                                                minLength: 0
                                                type: string
                                                x-yang-type: string
                                              state:
                                                type: object
                                                properties:
                                                  type:
                                                    enum:
                                                    - VOICE
                                                    - VOICE_SIGNALING
                                                    maxLength: 18446744073709551615
                                                    minLength: 0
                                                    type: string
                                                    x-yang-type: string
                                                  vlan-id:
                                                    format: int32
                                                    maximum: 4094
                                                    minimum: 0
                                                    type: integer
                                                    x-range: 0..4094
                                                    x-yang-type: uint16
                                                  tagged:
                                                    format: boolean
                                                    type: boolean
                                                    x-yang-type: boolean
                                                  priority:
                                                    format: int32
                                                    maximum: 7
                                                    minimum: 0
                                                    type: integer
                                                    x-range: 0..7
                                                    x-yang-type: uint8
                                                  dscp:
                                                    format: int32
                                                    maximum: 63
                                                    minimum: 0
                                                    type: integer
                                                    x-range: 0..63
                                                    x-yang-type: uint8
                                    capabilities:
                                      type: object
                                      properties:
                                        capability:
                                          type: array
                                          items:
                                            type: object
                                            required:
                                            - name
                                            properties:
                                              name:
                                                enum:
                                                - NETWORK_POLICY
                                                - EXT_MDI_POWER_PSE
                                                - LOCATION_ID
                                                - EXT_MDI_POWER_PD
                                                - INVENTORY
                                                format: string
                                                type: string
                                                x-yang-type: identityref
                                              state:
                                                type: object
                                                properties:
                                                  name:
                                                    enum:
                                                    - NETWORK_POLICY
                                                    - EXT_MDI_POWER_PSE
                                                    - LOCATION_ID
                                                    - EXT_MDI_POWER_PD
                                                    - INVENTORY
                                                    format: string
                                                    type: string
                                                    x-yang-type: identityref
                                                  enabled:
                                                    format: boolean
                                                    type: boolean
                                                    x-yang-type: boolean
    openconfig_lldp_lldp_config:
      type: object
      properties:
        openconfig-lldp:config:
          type: object
          properties:
            enabled:
              default: 'true'
              format: boolean
              type: boolean
              x-yang-type: boolean
            hello-timer:
              format: int64
              maximum: 18446744073709551615
              minimum: 0
              type: string
              x-yang-type: uint64
            suppress-tlv-advertisement:
              type: array
              items:
                enum:
                - SYSTEM_DESCRIPTION
                - MANAGEMENT_ADDRESS
                - MED_NETWORK_POLICY
                - SYSTEM_NAME
                - PORT_VLAN_ID
                - VLAN_NAME
                - LINK_AGGREGATION
                - MED_EXT_MDI_POWER
                - CHASSIS_ID
                - MDI_POWER
                - MAX_FRAME_SIZE
                - PORT_ID
                - SYSTEM_CAPABILITIES
                - PORT_DESCRIPTION
                format: string
                type: string
                x-yang-type: identityref
            system-name:
              maxLength: 255
              minLength: 0
              type: string
              x-length: 0..255
              x-yang-type: string
            system-description:
              maxLength: 255
              minLength: 0
              type: string
              x-length: 0..255
              x-yang-type: string
            openconfig-lldp-ext:multiplier:
              format: int32
              maximum: 10
              minimum: 1
              type: integer
              x-range: 1..10
              x-yang-type: uint8
            openconfig-lldp-ext:mode:
              enum:
              - RECEIVE
              - TRANSMIT
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    post_openconfig_lldp_lldp_config:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config'
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces'
    put_openconfig_lldp_lldp_config:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config'
    patch_openconfig_lldp_lldp_config:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config'
    get_openconfig_lldp_lldp_config:
      type: object
      properties:
        openconfig-lldp:config:
          type: object
          properties:
            enabled:
              default: 'true'
              format: boolean
              type: boolean
              x-yang-type: boolean
            hello-timer:
              format: int64
              maximum: 18446744073709551615
              minimum: 0
              type: string
              x-yang-type: uint64
            suppress-tlv-advertisement:
              type: array
              items:
                enum:
                - SYSTEM_DESCRIPTION
                - MANAGEMENT_ADDRESS
                - MED_NETWORK_POLICY
                - SYSTEM_NAME
                - PORT_VLAN_ID
                - VLAN_NAME
                - LINK_AGGREGATION
                - MED_EXT_MDI_POWER
                - CHASSIS_ID
                - MDI_POWER
                - MAX_FRAME_SIZE
                - PORT_ID
                - SYSTEM_CAPABILITIES
                - PORT_DESCRIPTION
                format: string
                type: string
                x-yang-type: identityref
            system-name:
              maxLength: 255
              minLength: 0
              type: string
              x-length: 0..255
              x-yang-type: string
            system-description:
              maxLength: 255
              minLength: 0
              type: string
              x-length: 0..255
              x-yang-type: string
            openconfig-lldp-ext:multiplier:
              format: int32
              maximum: 10
              minimum: 1
              type: integer
              x-range: 1..10
              x-yang-type: uint8
            openconfig-lldp-ext:mode:
              enum:
              - RECEIVE
              - TRANSMIT
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    openconfig_lldp_lldp_config_enabled:
      type: object
      properties:
        openconfig-lldp:enabled:
          default: 'true'
          format: boolean
          type: boolean
          x-yang-type: boolean
    post_openconfig_lldp_lldp_config_enabled:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_enabled'
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_hello_timer'
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_suppress_tlv_advertisement'
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_system_name'
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_system_description'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_config_multiplier'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_config_mode'
    put_openconfig_lldp_lldp_config_enabled:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_enabled'
    patch_openconfig_lldp_lldp_config_enabled:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_enabled'
    get_openconfig_lldp_lldp_config_enabled:
      type: object
      properties:
        openconfig-lldp:enabled:
          default: 'true'
          format: boolean
          type: boolean
          x-yang-type: boolean
    openconfig_lldp_lldp_config_hello_timer:
      type: object
      properties:
        openconfig-lldp:hello-timer:
          format: int64
          maximum: 18446744073709551615
          minimum: 0
          type: string
          x-yang-type: uint64
    put_openconfig_lldp_lldp_config_hello_timer:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_hello_timer'
    patch_openconfig_lldp_lldp_config_hello_timer:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_hello_timer'
    get_openconfig_lldp_lldp_config_hello_timer:
      type: object
      properties:
        openconfig-lldp:hello-timer:
          format: int64
          maximum: 18446744073709551615
          minimum: 0
          type: string
          x-yang-type: uint64
    openconfig_lldp_lldp_config_suppress_tlv_advertisement:
      type: object
      properties:
        openconfig-lldp:suppress-tlv-advertisement:
          type: array
          items:
            enum:
            - SYSTEM_DESCRIPTION
            - MANAGEMENT_ADDRESS
            - MED_NETWORK_POLICY
            - SYSTEM_NAME
            - PORT_VLAN_ID
            - VLAN_NAME
            - LINK_AGGREGATION
            - MED_EXT_MDI_POWER
            - CHASSIS_ID
            - MDI_POWER
            - MAX_FRAME_SIZE
            - PORT_ID
            - SYSTEM_CAPABILITIES
            - PORT_DESCRIPTION
            format: string
            type: string
            x-yang-type: identityref
    put_openconfig_lldp_lldp_config_suppress_tlv_advertisement:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_suppress_tlv_advertisement'
    patch_openconfig_lldp_lldp_config_suppress_tlv_advertisement:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_suppress_tlv_advertisement'
    get_openconfig_lldp_lldp_config_suppress_tlv_advertisement:
      type: object
      properties:
        openconfig-lldp:suppress-tlv-advertisement:
          type: array
          items:
            enum:
            - SYSTEM_DESCRIPTION
            - MANAGEMENT_ADDRESS
            - MED_NETWORK_POLICY
            - SYSTEM_NAME
            - PORT_VLAN_ID
            - VLAN_NAME
            - LINK_AGGREGATION
            - MED_EXT_MDI_POWER
            - CHASSIS_ID
            - MDI_POWER
            - MAX_FRAME_SIZE
            - PORT_ID
            - SYSTEM_CAPABILITIES
            - PORT_DESCRIPTION
            format: string
            type: string
            x-yang-type: identityref
    openconfig_lldp_lldp_config_system_name:
      type: object
      properties:
        openconfig-lldp:system-name:
          maxLength: 255
          minLength: 0
          type: string
          x-length: 0..255
          x-yang-type: string
    put_openconfig_lldp_lldp_config_system_name:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_system_name'
    patch_openconfig_lldp_lldp_config_system_name:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_system_name'
    get_openconfig_lldp_lldp_config_system_name:
      type: object
      properties:
        openconfig-lldp:system-name:
          maxLength: 255
          minLength: 0
          type: string
          x-length: 0..255
          x-yang-type: string
    openconfig_lldp_lldp_config_system_description:
      type: object
      properties:
        openconfig-lldp:system-description:
          maxLength: 255
          minLength: 0
          type: string
          x-length: 0..255
          x-yang-type: string
    put_openconfig_lldp_lldp_config_system_description:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_system_description'
    patch_openconfig_lldp_lldp_config_system_description:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_config_system_description'
    get_openconfig_lldp_lldp_config_system_description:
      type: object
      properties:
        openconfig-lldp:system-description:
          maxLength: 255
          minLength: 0
          type: string
          x-length: 0..255
          x-yang-type: string
    openconfig_lldp_ext_lldp_config_multiplier:
      type: object
      properties:
        openconfig-lldp-ext:multiplier:
          format: int32
          maximum: 10
          minimum: 1
          type: integer
          x-range: 1..10
          x-yang-type: uint8
    put_openconfig_lldp_ext_lldp_config_multiplier:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_config_multiplier'
    patch_openconfig_lldp_ext_lldp_config_multiplier:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_config_multiplier'
    get_openconfig_lldp_ext_lldp_config_multiplier:
      type: object
      properties:
        openconfig-lldp-ext:multiplier:
          format: int32
          maximum: 10
          minimum: 1
          type: integer
          x-range: 1..10
          x-yang-type: uint8
    openconfig_lldp_ext_lldp_config_mode:
      type: object
      properties:
        openconfig-lldp-ext:mode:
          enum:
          - RECEIVE
          - TRANSMIT
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    put_openconfig_lldp_ext_lldp_config_mode:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_config_mode'
    patch_openconfig_lldp_ext_lldp_config_mode:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_config_mode'
    get_openconfig_lldp_ext_lldp_config_mode:
      type: object
      properties:
        openconfig-lldp-ext:mode:
          enum:
          - RECEIVE
          - TRANSMIT
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_state:
      type: object
      properties:
        openconfig-lldp:state:
          type: object
          properties:
            enabled:
              default: 'true'
              format: boolean
              type: boolean
              x-yang-type: boolean
            hello-timer:
              format: int64
              maximum: 18446744073709551615
              minimum: 0
              type: string
              x-yang-type: uint64
            suppress-tlv-advertisement:
              type: array
              items:
                enum:
                - SYSTEM_DESCRIPTION
                - MANAGEMENT_ADDRESS
                - MED_NETWORK_POLICY
                - SYSTEM_NAME
                - PORT_VLAN_ID
                - VLAN_NAME
                - LINK_AGGREGATION
                - MED_EXT_MDI_POWER
                - CHASSIS_ID
                - MDI_POWER
                - MAX_FRAME_SIZE
                - PORT_ID
                - SYSTEM_CAPABILITIES
                - PORT_DESCRIPTION
                format: string
                type: string
                x-yang-type: identityref
            system-name:
              maxLength: 255
              minLength: 0
              type: string
              x-length: 0..255
              x-yang-type: string
            system-description:
              maxLength: 255
              minLength: 0
              type: string
              x-length: 0..255
              x-yang-type: string
            openconfig-lldp-ext:multiplier:
              format: int32
              maximum: 10
              minimum: 1
              type: integer
              x-range: 1..10
              x-yang-type: uint8
            openconfig-lldp-ext:mode:
              enum:
              - RECEIVE
              - TRANSMIT
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    get_openconfig_lldp_lldp_state_enabled:
      type: object
      properties:
        openconfig-lldp:enabled:
          default: 'true'
          format: boolean
          type: boolean
          x-yang-type: boolean
    get_openconfig_lldp_lldp_state_hello_timer:
      type: object
      properties:
        openconfig-lldp:hello-timer:
          format: int64
          maximum: 18446744073709551615
          minimum: 0
          type: string
          x-yang-type: uint64
    get_openconfig_lldp_lldp_state_suppress_tlv_advertisement:
      type: object
      properties:
        openconfig-lldp:suppress-tlv-advertisement:
          type: array
          items:
            enum:
            - SYSTEM_DESCRIPTION
            - MANAGEMENT_ADDRESS
            - MED_NETWORK_POLICY
            - SYSTEM_NAME
            - PORT_VLAN_ID
            - VLAN_NAME
            - LINK_AGGREGATION
            - MED_EXT_MDI_POWER
            - CHASSIS_ID
            - MDI_POWER
            - MAX_FRAME_SIZE
            - PORT_ID
            - SYSTEM_CAPABILITIES
            - PORT_DESCRIPTION
            format: string
            type: string
            x-yang-type: identityref
    get_openconfig_lldp_lldp_state_system_name:
      type: object
      properties:
        openconfig-lldp:system-name:
          maxLength: 255
          minLength: 0
          type: string
          x-length: 0..255
          x-yang-type: string
    get_openconfig_lldp_lldp_state_system_description:
      type: object
      properties:
        openconfig-lldp:system-description:
          maxLength: 255
          minLength: 0
          type: string
          x-length: 0..255
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_state_multiplier:
      type: object
      properties:
        openconfig-lldp-ext:multiplier:
          format: int32
          maximum: 10
          minimum: 1
          type: integer
          x-range: 1..10
          x-yang-type: uint8
    get_openconfig_lldp_ext_lldp_state_mode:
      type: object
      properties:
        openconfig-lldp-ext:mode:
          enum:
          - RECEIVE
          - TRANSMIT
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    openconfig_lldp_lldp_interfaces:
      type: object
      properties:
        openconfig-lldp:interfaces:
          type: object
          properties:
            interface:
              type: array
              items:
                type: object
                required:
                - name
                properties:
                  name:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  config:
                    type: object
                    properties:
                      name:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      enabled:
                        default: 'true'
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
                      openconfig-lldp-ext:management-address-ipv4:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                        x-yang-type: string
                      openconfig-lldp-ext:management-address-ipv6:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                        x-yang-type: string
                      openconfig-lldp-ext:network-policy:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      openconfig-lldp-ext:suppress-tlv-advertisement:
                        type: array
                        items:
                          enum:
                          - SYSTEM_DESCRIPTION
                          - MANAGEMENT_ADDRESS
                          - MED_NETWORK_POLICY
                          - SYSTEM_NAME
                          - PORT_VLAN_ID
                          - VLAN_NAME
                          - LINK_AGGREGATION
                          - MED_EXT_MDI_POWER
                          - CHASSIS_ID
                          - MDI_POWER
                          - MAX_FRAME_SIZE
                          - PORT_ID
                          - SYSTEM_CAPABILITIES
                          - PORT_DESCRIPTION
                          format: string
                          type: string
                          x-yang-type: identityref
                      openconfig-lldp-ext:allowed-vlans:
                        type: array
                        items:
                          maxLength: 18446744073709551615
                          minLength: 0
                          type: string
                          x-yang-type: string
                      openconfig-lldp-ext:vlan-name-tlv-count:
                        default: 10
                        format: int32
                        maximum: 128
                        minimum: 1
                        type: integer
                        x-range: 1..128
                        x-yang-type: uint16
                      openconfig-lldp-ext:mode:
                        enum:
                        - RECEIVE
                        - TRANSMIT
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
    put_openconfig_lldp_lldp_interfaces:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces'
    patch_openconfig_lldp_lldp_interfaces:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces'
    get_openconfig_lldp_lldp_interfaces:
      type: object
      properties:
        openconfig-lldp:interfaces:
          type: object
          properties:
            interface:
              type: array
              items:
                type: object
                required:
                - name
                properties:
                  name:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  config:
                    type: object
                    properties:
                      name:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      enabled:
                        default: 'true'
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
                      openconfig-lldp-ext:management-address-ipv4:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                        x-yang-type: string
                      openconfig-lldp-ext:management-address-ipv6:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                        x-yang-type: string
                      openconfig-lldp-ext:network-policy:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      openconfig-lldp-ext:suppress-tlv-advertisement:
                        type: array
                        items:
                          enum:
                          - SYSTEM_DESCRIPTION
                          - MANAGEMENT_ADDRESS
                          - MED_NETWORK_POLICY
                          - SYSTEM_NAME
                          - PORT_VLAN_ID
                          - VLAN_NAME
                          - LINK_AGGREGATION
                          - MED_EXT_MDI_POWER
                          - CHASSIS_ID
                          - MDI_POWER
                          - MAX_FRAME_SIZE
                          - PORT_ID
                          - SYSTEM_CAPABILITIES
                          - PORT_DESCRIPTION
                          format: string
                          type: string
                          x-yang-type: identityref
                      openconfig-lldp-ext:allowed-vlans:
                        type: array
                        items:
                          maxLength: 18446744073709551615
                          minLength: 0
                          type: string
                          x-yang-type: string
                      openconfig-lldp-ext:vlan-name-tlv-count:
                        default: 10
                        format: int32
                        maximum: 128
                        minimum: 1
                        type: integer
                        x-range: 1..128
                        x-yang-type: uint16
                      openconfig-lldp-ext:mode:
                        enum:
                        - RECEIVE
                        - TRANSMIT
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                  state:
                    type: object
                    properties:
                      name:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      enabled:
                        default: 'true'
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
                      counters:
                        type: object
                        properties:
                          frame-in:
                            format: int64
                            maximum: 18446744073709551615
                            minimum: 0
                            type: string
                            x-yang-type: uint64
                          frame-out:
                            format: int64
                            maximum: 18446744073709551615
                            minimum: 0
                            type: string
                            x-yang-type: uint64
                          frame-discard:
                            format: int64
                            maximum: 18446744073709551615
                            minimum: 0
                            type: string
                            x-yang-type: uint64
                          tlv-unknown:
                            format: int64
                            maximum: 18446744073709551615
                            minimum: 0
                            type: string
                            x-yang-type: uint64
                          openconfig-lldp-ext:ageout:
                            format: int64
                            maximum: 18446744073709551615
                            minimum: 0
                            type: string
                            x-yang-type: uint64
                      openconfig-lldp-ext:management-address-ipv4:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                        x-yang-type: string
                      openconfig-lldp-ext:management-address-ipv6:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                        x-yang-type: string
                      openconfig-lldp-ext:network-policy:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      openconfig-lldp-ext:suppress-tlv-advertisement:
                        type: array
                        items:
                          enum:
                          - SYSTEM_DESCRIPTION
                          - MANAGEMENT_ADDRESS
                          - MED_NETWORK_POLICY
                          - SYSTEM_NAME
                          - PORT_VLAN_ID
                          - VLAN_NAME
                          - LINK_AGGREGATION
                          - MED_EXT_MDI_POWER
                          - CHASSIS_ID
                          - MDI_POWER
                          - MAX_FRAME_SIZE
                          - PORT_ID
                          - SYSTEM_CAPABILITIES
                          - PORT_DESCRIPTION
                          format: string
                          type: string
                          x-yang-type: identityref
                      openconfig-lldp-ext:allowed-vlans:
                        type: array
                        items:
                          maxLength: 18446744073709551615
                          minLength: 0
                          type: string
                          x-yang-type: string
                      openconfig-lldp-ext:vlan-name-tlv-count:
                        default: 10
                        format: int32
                        maximum: 128
                        minimum: 1
                        type: integer
                        x-range: 1..128
                        x-yang-type: uint16
                      openconfig-lldp-ext:mode:
                        enum:
                        - RECEIVE
                        - TRANSMIT
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                  neighbors:
                    type: object
                    properties:
                      neighbor:
                        type: array
                        items:
                          type: object
                          required:
                          - id
                          properties:
                            id:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            state:
                              type: object
                              properties:
                                system-name:
                                  maxLength: 255
                                  minLength: 0
                                  type: string
                                  x-length: 0..255
                                  x-yang-type: string
                                system-description:
                                  maxLength: 255
                                  minLength: 0
                                  type: string
                                  x-length: 0..255
                                  x-yang-type: string
                                chassis-id:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                chassis-id-type:
                                  enum:
                                  - CHASSIS_COMPONENT
                                  - INTERFACE_ALIAS
                                  - PORT_COMPONENT
                                  - MAC_ADDRESS
                                  - NETWORK_ADDRESS
                                  - INTERFACE_NAME
                                  - LOCAL
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                id:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                ttl:
                                  format: int32
                                  maximum: 65535
                                  minimum: 0
                                  type: integer
                                  x-yang-type: uint16
                                port-id:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                port-id-type:
                                  enum:
                                  - INTERFACE_ALIAS
                                  - PORT_COMPONENT
                                  - MAC_ADDRESS
                                  - NETWORK_ADDRESS
                                  - INTERFACE_NAME
                                  - AGENT_CIRCUIT_ID
                                  - LOCAL
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                port-description:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                management-address:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                            custom-tlvs:
                              type: object
                              properties:
                                tlv:
                                  type: array
                                  items:
                                    type: object
                                    required:
                                    - type
                                    - oui
                                    - oui-subtype
                                    properties:
                                      type:
                                        format: int32
                                        maximum: 2147483647
                                        minimum: -2147483648
                                        type: integer
                                        x-yang-type: int32
                                      oui:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      oui-subtype:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      state:
                                        type: object
                                        properties:
                                          type:
                                            format: int32
                                            maximum: 2147483647
                                            minimum: -2147483648
                                            type: integer
                                            x-yang-type: int32
                                          oui:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          oui-subtype:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          value:
                                            format: binary
                                            type: string
                                            x-yang-type: binary
                            capabilities:
                              type: object
                              properties:
                                capability:
                                  type: array
                                  items:
                                    type: object
                                    required:
                                    - name
                                    properties:
                                      name:
                                        enum:
                                        - ROUTER
                                        - TELEPHONE
                                        - OTHER
                                        - REPEATER
                                        - DOCSIS_CABLE_DEVICE
                                        - STATION_ONLY
                                        - C_VLAN
                                        - S_VLAN
                                        - TWO_PORT_MAC_RELAY
                                        - WLAN_ACCESS_POINT
                                        - MAC_BRIDGE
                                        format: string
                                        type: string
                                        x-yang-type: identityref
                                      state:
                                        type: object
                                        properties:
                                          name:
                                            enum:
                                            - ROUTER
                                            - TELEPHONE
                                            - OTHER
                                            - REPEATER
                                            - DOCSIS_CABLE_DEVICE
                                            - STATION_ONLY
                                            - C_VLAN
                                            - S_VLAN
                                            - TWO_PORT_MAC_RELAY
                                            - WLAN_ACCESS_POINT
                                            - MAC_BRIDGE
                                            format: string
                                            type: string
                                            x-yang-type: identityref
                                          enabled:
                                            format: boolean
                                            type: boolean
                                            x-yang-type: boolean
                            openconfig-lldp-ext:custom-tlvs-vlan-name:
                              type: object
                              properties:
                                vlan-name-tlv:
                                  type: array
                                  items:
                                    type: object
                                    required:
                                    - type
                                    - oui
                                    - oui-subtype
                                    - vlan-id
                                    properties:
                                      type:
                                        format: int32
                                        maximum: 2147483647
                                        minimum: -2147483648
                                        type: integer
                                        x-yang-type: int32
                                      oui:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      oui-subtype:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      vlan-id:
                                        format: int32
                                        maximum: 4094
                                        minimum: 1
                                        type: integer
                                        x-range: 1..4094
                                        x-yang-type: uint16
                                      state:
                                        type: object
                                        properties:
                                          type:
                                            format: int32
                                            maximum: 2147483647
                                            minimum: -2147483648
                                            type: integer
                                            x-yang-type: int32
                                          oui:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          oui-subtype:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          vlan-id:
                                            format: int32
                                            maximum: 4094
                                            minimum: 1
                                            type: integer
                                            x-range: 1..4094
                                            x-yang-type: uint16
                                          value:
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                            openconfig-lldp-ext:mdi-power:
                              type: object
                              properties:
                                state:
                                  type: object
                                  properties:
                                    device-type:
                                      enum:
                                      - PSE
                                      - PD
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-supported:
                                      format: boolean
                                      type: boolean
                                      x-yang-type: boolean
                                    power-enabled:
                                      format: boolean
                                      type: boolean
                                      x-yang-type: boolean
                                    pair-control:
                                      format: boolean
                                      type: boolean
                                      x-yang-type: boolean
                                    power-pair:
                                      enum:
                                      - SIGNAL
                                      - SPARE
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-class:
                                      enum:
                                      - CLASS0
                                      - CLASS1
                                      - CLASS2
                                      - CLASS3
                                      - CLASS4
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-type:
                                      enum:
                                      - TYPE1
                                      - TYPE2
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    pd-power-source:
                                      enum:
                                      - UNKNOWN
                                      - PSE
                                      - LOCAL
                                      - LOCAL_AND_PSE
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    pse-power-source:
                                      enum:
                                      - UNKNOWN
                                      - PRIMARY
                                      - BACKUP
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-priority:
                                      enum:
                                      - UNKNOWN
                                      - CRITICAL
                                      - HIGH
                                      - LOW
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    requested-power:
                                      format: int32
                                      maximum: 65535
                                      minimum: 0
                                      type: integer
                                      x-yang-type: uint16
                                    allocated-power:
                                      format: int32
                                      maximum: 65535
                                      minimum: 0
                                      type: integer
                                      x-yang-type: uint16
                                    tlv-type:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    requested-power-a:
                                      format: int32
                                      maximum: 65535
                                      minimum: 0
                                      type: integer
                                      x-yang-type: uint16
                                    requested-power-b:
                                      format: int32
                                      maximum: 65535
                                      minimum: 0
                                      type: integer
                                      x-yang-type: uint16
                                    allocated-power-a:
                                      format: int32
                                      maximum: 65535
                                      minimum: 0
                                      type: integer
                                      x-yang-type: uint16
                                    allocated-power-b:
                                      format: int32
                                      maximum: 65535
                                      minimum: 0
                                      type: integer
                                      x-yang-type: uint16
                                    pd-power-status:
                                      enum:
                                      - UNKNOWN
                                      - 4_PAIR_DUAL_SIG_PD
                                      - 2_PAIR_DUAL_SIG_PD
                                      - SINGLE_SIG_PD
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    pse-power-pairs-ext:
                                      enum:
                                      - UNKNOWN
                                      - ALTERNATE_A
                                      - ALTERNATE_B
                                      - BOTH
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-class-ext-a:
                                      enum:
                                      - UNKNOWN
                                      - SINGLE_SIG
                                      - CLASS1
                                      - CLASS2
                                      - CLASS3
                                      - CLASS4
                                      - CLASS5
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-class-ext-b:
                                      enum:
                                      - UNKNOWN
                                      - SINGLE_SIG
                                      - CLASS1
                                      - CLASS2
                                      - CLASS3
                                      - CLASS4
                                      - CLASS5
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-class-ext:
                                      enum:
                                      - UNKNOWN
                                      - DUAL_SIG
                                      - CLASS1
                                      - CLASS2
                                      - CLASS3
                                      - CLASS4
                                      - CLASS5
                                      - CLASS6
                                      - CLASS7
                                      - CLASS8
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-type-ext:
                                      enum:
                                      - UNKNOWN
                                      - TYPE4_DUAL_SIG_PD
                                      - TYPE4_SINGLE_SIG_PD
                                      - TYPE3_DUAL_SIG_PD
                                      - TYPE3_SINGLE_SIG_PD
                                      - TYPE4_PSE
                                      - TYPE3_PSE
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    pd-load:
                                      format: boolean
                                      type: boolean
                                      x-yang-type: boolean
                            openconfig-lldp-ext:med:
                              type: object
                              properties:
                                state:
                                  type: object
                                  properties:
                                    device-class:
                                      enum:
                                      - NOT_DEFINED
                                      - ENDPOINT_CLASS1
                                      - ENDPOINT_CLASS2
                                      - ENDPOINT_CLASS3
                                      - NETWORK_CONNECTIVITY
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    extended-mdi-power:
                                      type: object
                                      properties:
                                        device-type:
                                          enum:
                                          - PSE
                                          - PD
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        pd-power-source:
                                          enum:
                                          - UNKNOWN
                                          - PSE
                                          - LOCAL
                                          - LOCAL_AND_PSE
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        pse-power-source:
                                          enum:
                                          - UNKNOWN
                                          - PRIMARY
                                          - BACKUP
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-priority:
                                          enum:
                                          - UNKNOWN
                                          - CRITICAL
                                          - HIGH
                                          - LOW
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        power-value:
                                          format: int32
                                          maximum: 65535
                                          minimum: 0
                                          type: integer
                                          x-yang-type: uint16
                                    inventory:
                                      type: object
                                      properties:
                                        hardware-revision:
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        firmware-revision:
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        software-revision:
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        serial-number:
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        manufacturer:
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        model:
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                        asset-id:
                                          maxLength: 18446744073709551615
                                          minLength: 0
                                          type: string
                                          x-yang-type: string
                                network-policies:
                                  type: object
                                  properties:
                                    network-policy:
                                      type: array
                                      items:
                                        type: object
                                        required:
                                        - type
                                        properties:
                                          type:
                                            enum:
                                            - VOICE
                                            - VOICE_SIGNALING
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          state:
                                            type: object
                                            properties:
                                              type:
                                                enum:
                                                - VOICE
                                                - VOICE_SIGNALING
                                                maxLength: 18446744073709551615
                                                minLength: 0
                                                type: string
                                                x-yang-type: string
                                              vlan-id:
                                                format: int32
                                                maximum: 4094
                                                minimum: 0
                                                type: integer
                                                x-range: 0..4094
                                                x-yang-type: uint16
                                              tagged:
                                                format: boolean
                                                type: boolean
                                                x-yang-type: boolean
                                              priority:
                                                format: int32
                                                maximum: 7
                                                minimum: 0
                                                type: integer
                                                x-range: 0..7
                                                x-yang-type: uint8
                                              dscp:
                                                format: int32
                                                maximum: 63
                                                minimum: 0
                                                type: integer
                                                x-range: 0..63
                                                x-yang-type: uint8
                                capabilities:
                                  type: object
                                  properties:
                                    capability:
                                      type: array
                                      items:
                                        type: object
                                        required:
                                        - name
                                        properties:
                                          name:
                                            enum:
                                            - NETWORK_POLICY
                                            - EXT_MDI_POWER_PSE
                                            - LOCATION_ID
                                            - EXT_MDI_POWER_PD
                                            - INVENTORY
                                            format: string
                                            type: string
                                            x-yang-type: identityref
                                          state:
                                            type: object
                                            properties:
                                              name:
                                                enum:
                                                - NETWORK_POLICY
                                                - EXT_MDI_POWER_PSE
                                                - LOCATION_ID
                                                - EXT_MDI_POWER_PD
                                                - INVENTORY
                                                format: string
                                                type: string
                                                x-yang-type: identityref
                                              enabled:
                                                format: boolean
                                                type: boolean
                                                x-yang-type: boolean
    openconfig_lldp_lldp_interfaces_interface:
      type: object
      properties:
        openconfig-lldp:interface:
          type: array
          items:
            type: object
            required:
            - name
            properties:
              name:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
              config:
                type: object
                properties:
                  name:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  enabled:
                    default: 'true'
                    format: boolean
                    type: boolean
                    x-yang-type: boolean
                  openconfig-lldp-ext:management-address-ipv4:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                    x-yang-type: string
                  openconfig-lldp-ext:management-address-ipv6:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                    x-yang-type: string
                  openconfig-lldp-ext:network-policy:
                    format: int32
                    maximum: 65535
                    minimum: 0
                    type: integer
                    x-yang-type: uint16
                  openconfig-lldp-ext:suppress-tlv-advertisement:
                    type: array
                    items:
                      enum:
                      - SYSTEM_DESCRIPTION
                      - MANAGEMENT_ADDRESS
                      - MED_NETWORK_POLICY
                      - SYSTEM_NAME
                      - PORT_VLAN_ID
                      - VLAN_NAME
                      - LINK_AGGREGATION
                      - MED_EXT_MDI_POWER
                      - CHASSIS_ID
                      - MDI_POWER
                      - MAX_FRAME_SIZE
                      - PORT_ID
                      - SYSTEM_CAPABILITIES
                      - PORT_DESCRIPTION
                      format: string
                      type: string
                      x-yang-type: identityref
                  openconfig-lldp-ext:allowed-vlans:
                    type: array
                    items:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                  openconfig-lldp-ext:vlan-name-tlv-count:
                    default: 10
                    format: int32
                    maximum: 128
                    minimum: 1
                    type: integer
                    x-range: 1..128
                    x-yang-type: uint16
                  openconfig-lldp-ext:mode:
                    enum:
                    - RECEIVE
                    - TRANSMIT
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
    put_openconfig_lldp_lldp_interfaces_interface:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface'
    patch_openconfig_lldp_lldp_interfaces_interface:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface'
    get_openconfig_lldp_lldp_interfaces_interface:
      type: object
      properties:
        openconfig-lldp:interface:
          type: array
          items:
            type: object
            required:
            - name
            properties:
              name:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
              config:
                type: object
                properties:
                  name:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  enabled:
                    default: 'true'
                    format: boolean
                    type: boolean
                    x-yang-type: boolean
                  openconfig-lldp-ext:management-address-ipv4:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                    x-yang-type: string
                  openconfig-lldp-ext:management-address-ipv6:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                    x-yang-type: string
                  openconfig-lldp-ext:network-policy:
                    format: int32
                    maximum: 65535
                    minimum: 0
                    type: integer
                    x-yang-type: uint16
                  openconfig-lldp-ext:suppress-tlv-advertisement:
                    type: array
                    items:
                      enum:
                      - SYSTEM_DESCRIPTION
                      - MANAGEMENT_ADDRESS
                      - MED_NETWORK_POLICY
                      - SYSTEM_NAME
                      - PORT_VLAN_ID
                      - VLAN_NAME
                      - LINK_AGGREGATION
                      - MED_EXT_MDI_POWER
                      - CHASSIS_ID
                      - MDI_POWER
                      - MAX_FRAME_SIZE
                      - PORT_ID
                      - SYSTEM_CAPABILITIES
                      - PORT_DESCRIPTION
                      format: string
                      type: string
                      x-yang-type: identityref
                  openconfig-lldp-ext:allowed-vlans:
                    type: array
                    items:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                  openconfig-lldp-ext:vlan-name-tlv-count:
                    default: 10
                    format: int32
                    maximum: 128
                    minimum: 1
                    type: integer
                    x-range: 1..128
                    x-yang-type: uint16
                  openconfig-lldp-ext:mode:
                    enum:
                    - RECEIVE
                    - TRANSMIT
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
              state:
                type: object
                properties:
                  name:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  enabled:
                    default: 'true'
                    format: boolean
                    type: boolean
                    x-yang-type: boolean
                  counters:
                    type: object
                    properties:
                      frame-in:
                        format: int64
                        maximum: 18446744073709551615
                        minimum: 0
                        type: string
                        x-yang-type: uint64
                      frame-out:
                        format: int64
                        maximum: 18446744073709551615
                        minimum: 0
                        type: string
                        x-yang-type: uint64
                      frame-discard:
                        format: int64
                        maximum: 18446744073709551615
                        minimum: 0
                        type: string
                        x-yang-type: uint64
                      tlv-unknown:
                        format: int64
                        maximum: 18446744073709551615
                        minimum: 0
                        type: string
                        x-yang-type: uint64
                      openconfig-lldp-ext:ageout:
                        format: int64
                        maximum: 18446744073709551615
                        minimum: 0
                        type: string
                        x-yang-type: uint64
                  openconfig-lldp-ext:management-address-ipv4:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
                    x-yang-type: string
                  openconfig-lldp-ext:management-address-ipv6:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
                    x-yang-type: string
                  openconfig-lldp-ext:network-policy:
                    format: int32
                    maximum: 65535
                    minimum: 0
                    type: integer
                    x-yang-type: uint16
                  openconfig-lldp-ext:suppress-tlv-advertisement:
                    type: array
                    items:
                      enum:
                      - SYSTEM_DESCRIPTION
                      - MANAGEMENT_ADDRESS
                      - MED_NETWORK_POLICY
                      - SYSTEM_NAME
                      - PORT_VLAN_ID
                      - VLAN_NAME
                      - LINK_AGGREGATION
                      - MED_EXT_MDI_POWER
                      - CHASSIS_ID
                      - MDI_POWER
                      - MAX_FRAME_SIZE
                      - PORT_ID
                      - SYSTEM_CAPABILITIES
                      - PORT_DESCRIPTION
                      format: string
                      type: string
                      x-yang-type: identityref
                  openconfig-lldp-ext:allowed-vlans:
                    type: array
                    items:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                  openconfig-lldp-ext:vlan-name-tlv-count:
                    default: 10
                    format: int32
                    maximum: 128
                    minimum: 1
                    type: integer
                    x-range: 1..128
                    x-yang-type: uint16
                  openconfig-lldp-ext:mode:
                    enum:
                    - RECEIVE
                    - TRANSMIT
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
              neighbors:
                type: object
                properties:
                  neighbor:
                    type: array
                    items:
                      type: object
                      required:
                      - id
                      properties:
                        id:
                          maxLength: 18446744073709551615
                          minLength: 0
                          type: string
                          x-yang-type: string
                        state:
                          type: object
                          properties:
                            system-name:
                              maxLength: 255
                              minLength: 0
                              type: string
                              x-length: 0..255
                              x-yang-type: string
                            system-description:
                              maxLength: 255
                              minLength: 0
                              type: string
                              x-length: 0..255
                              x-yang-type: string
                            chassis-id:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            chassis-id-type:
                              enum:
                              - CHASSIS_COMPONENT
                              - INTERFACE_ALIAS
                              - PORT_COMPONENT
                              - MAC_ADDRESS
                              - NETWORK_ADDRESS
                              - INTERFACE_NAME
                              - LOCAL
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            id:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            ttl:
                              format: int32
                              maximum: 65535
                              minimum: 0
                              type: integer
                              x-yang-type: uint16
                            port-id:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            port-id-type:
                              enum:
                              - INTERFACE_ALIAS
                              - PORT_COMPONENT
                              - MAC_ADDRESS
                              - NETWORK_ADDRESS
                              - INTERFACE_NAME
                              - AGENT_CIRCUIT_ID
                              - LOCAL
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            port-description:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            management-address:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                        custom-tlvs:
                          type: object
                          properties:
                            tlv:
                              type: array
                              items:
                                type: object
                                required:
                                - type
                                - oui
                                - oui-subtype
                                properties:
                                  type:
                                    format: int32
                                    maximum: 2147483647
                                    minimum: -2147483648
                                    type: integer
                                    x-yang-type: int32
                                  oui:
                                    maxLength: 18446744073709551615
                                    minLength: 0
                                    type: string
                                    x-yang-type: string
                                  oui-subtype:
                                    maxLength: 18446744073709551615
                                    minLength: 0
                                    type: string
                                    x-yang-type: string
                                  state:
                                    type: object
                                    properties:
                                      type:
                                        format: int32
                                        maximum: 2147483647
                                        minimum: -2147483648
                                        type: integer
                                        x-yang-type: int32
                                      oui:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      oui-subtype:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      value:
                                        format: binary
                                        type: string
                                        x-yang-type: binary
                        capabilities:
                          type: object
                          properties:
                            capability:
                              type: array
                              items:
                                type: object
                                required:
                                - name
                                properties:
                                  name:
                                    enum:
                                    - ROUTER
                                    - TELEPHONE
                                    - OTHER
                                    - REPEATER
                                    - DOCSIS_CABLE_DEVICE
                                    - STATION_ONLY
                                    - C_VLAN
                                    - S_VLAN
                                    - TWO_PORT_MAC_RELAY
                                    - WLAN_ACCESS_POINT
                                    - MAC_BRIDGE
                                    format: string
                                    type: string
                                    x-yang-type: identityref
                                  state:
                                    type: object
                                    properties:
                                      name:
                                        enum:
                                        - ROUTER
                                        - TELEPHONE
                                        - OTHER
                                        - REPEATER
                                        - DOCSIS_CABLE_DEVICE
                                        - STATION_ONLY
                                        - C_VLAN
                                        - S_VLAN
                                        - TWO_PORT_MAC_RELAY
                                        - WLAN_ACCESS_POINT
                                        - MAC_BRIDGE
                                        format: string
                                        type: string
                                        x-yang-type: identityref
                                      enabled:
                                        format: boolean
                                        type: boolean
                                        x-yang-type: boolean
                        openconfig-lldp-ext:custom-tlvs-vlan-name:
                          type: object
                          properties:
                            vlan-name-tlv:
                              type: array
                              items:
                                type: object
                                required:
                                - type
                                - oui
                                - oui-subtype
                                - vlan-id
                                properties:
                                  type:
                                    format: int32
                                    maximum: 2147483647
                                    minimum: -2147483648
                                    type: integer
                                    x-yang-type: int32
                                  oui:
                                    maxLength: 18446744073709551615
                                    minLength: 0
                                    type: string
                                    x-yang-type: string
                                  oui-subtype:
                                    maxLength: 18446744073709551615
                                    minLength: 0
                                    type: string
                                    x-yang-type: string
                                  vlan-id:
                                    format: int32
                                    maximum: 4094
                                    minimum: 1
                                    type: integer
                                    x-range: 1..4094
                                    x-yang-type: uint16
                                  state:
                                    type: object
                                    properties:
                                      type:
                                        format: int32
                                        maximum: 2147483647
                                        minimum: -2147483648
                                        type: integer
                                        x-yang-type: int32
                                      oui:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      oui-subtype:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      vlan-id:
                                        format: int32
                                        maximum: 4094
                                        minimum: 1
                                        type: integer
                                        x-range: 1..4094
                                        x-yang-type: uint16
                                      value:
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                        openconfig-lldp-ext:mdi-power:
                          type: object
                          properties:
                            state:
                              type: object
                              properties:
                                device-type:
                                  enum:
                                  - PSE
                                  - PD
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                power-supported:
                                  format: boolean
                                  type: boolean
                                  x-yang-type: boolean
                                power-enabled:
                                  format: boolean
                                  type: boolean
                                  x-yang-type: boolean
                                pair-control:
                                  format: boolean
                                  type: boolean
                                  x-yang-type: boolean
                                power-pair:
                                  enum:
                                  - SIGNAL
                                  - SPARE
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                power-class:
                                  enum:
                                  - CLASS0
                                  - CLASS1
                                  - CLASS2
                                  - CLASS3
                                  - CLASS4
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                power-type:
                                  enum:
                                  - TYPE1
                                  - TYPE2
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                pd-power-source:
                                  enum:
                                  - UNKNOWN
                                  - PSE
                                  - LOCAL
                                  - LOCAL_AND_PSE
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                pse-power-source:
                                  enum:
                                  - UNKNOWN
                                  - PRIMARY
                                  - BACKUP
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                power-priority:
                                  enum:
                                  - UNKNOWN
                                  - CRITICAL
                                  - HIGH
                                  - LOW
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                requested-power:
                                  format: int32
                                  maximum: 65535
                                  minimum: 0
                                  type: integer
                                  x-yang-type: uint16
                                allocated-power:
                                  format: int32
                                  maximum: 65535
                                  minimum: 0
                                  type: integer
                                  x-yang-type: uint16
                                tlv-type:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                requested-power-a:
                                  format: int32
                                  maximum: 65535
                                  minimum: 0
                                  type: integer
                                  x-yang-type: uint16
                                requested-power-b:
                                  format: int32
                                  maximum: 65535
                                  minimum: 0
                                  type: integer
                                  x-yang-type: uint16
                                allocated-power-a:
                                  format: int32
                                  maximum: 65535
                                  minimum: 0
                                  type: integer
                                  x-yang-type: uint16
                                allocated-power-b:
                                  format: int32
                                  maximum: 65535
                                  minimum: 0
                                  type: integer
                                  x-yang-type: uint16
                                pd-power-status:
                                  enum:
                                  - UNKNOWN
                                  - 4_PAIR_DUAL_SIG_PD
                                  - 2_PAIR_DUAL_SIG_PD
                                  - SINGLE_SIG_PD
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                pse-power-pairs-ext:
                                  enum:
                                  - UNKNOWN
                                  - ALTERNATE_A
                                  - ALTERNATE_B
                                  - BOTH
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                power-class-ext-a:
                                  enum:
                                  - UNKNOWN
                                  - SINGLE_SIG
                                  - CLASS1
                                  - CLASS2
                                  - CLASS3
                                  - CLASS4
                                  - CLASS5
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                power-class-ext-b:
                                  enum:
                                  - UNKNOWN
                                  - SINGLE_SIG
                                  - CLASS1
                                  - CLASS2
                                  - CLASS3
                                  - CLASS4
                                  - CLASS5
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                power-class-ext:
                                  enum:
                                  - UNKNOWN
                                  - DUAL_SIG
                                  - CLASS1
                                  - CLASS2
                                  - CLASS3
                                  - CLASS4
                                  - CLASS5
                                  - CLASS6
                                  - CLASS7
                                  - CLASS8
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                power-type-ext:
                                  enum:
                                  - UNKNOWN
                                  - TYPE4_DUAL_SIG_PD
                                  - TYPE4_SINGLE_SIG_PD
                                  - TYPE3_DUAL_SIG_PD
                                  - TYPE3_SINGLE_SIG_PD
                                  - TYPE4_PSE
                                  - TYPE3_PSE
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                pd-load:
                                  format: boolean
                                  type: boolean
                                  x-yang-type: boolean
                        openconfig-lldp-ext:med:
                          type: object
                          properties:
                            state:
                              type: object
                              properties:
                                device-class:
                                  enum:
                                  - NOT_DEFINED
                                  - ENDPOINT_CLASS1
                                  - ENDPOINT_CLASS2
                                  - ENDPOINT_CLASS3
                                  - NETWORK_CONNECTIVITY
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                extended-mdi-power:
                                  type: object
                                  properties:
                                    device-type:
                                      enum:
                                      - PSE
                                      - PD
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    pd-power-source:
                                      enum:
                                      - UNKNOWN
                                      - PSE
                                      - LOCAL
                                      - LOCAL_AND_PSE
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    pse-power-source:
                                      enum:
                                      - UNKNOWN
                                      - PRIMARY
                                      - BACKUP
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-priority:
                                      enum:
                                      - UNKNOWN
                                      - CRITICAL
                                      - HIGH
                                      - LOW
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    power-value:
                                      format: int32
                                      maximum: 65535
                                      minimum: 0
                                      type: integer
                                      x-yang-type: uint16
                                inventory:
                                  type: object
                                  properties:
                                    hardware-revision:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    firmware-revision:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    software-revision:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    serial-number:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    manufacturer:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    model:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    asset-id:
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                            network-policies:
                              type: object
                              properties:
                                network-policy:
                                  type: array
                                  items:
                                    type: object
                                    required:
                                    - type
                                    properties:
                                      type:
                                        enum:
                                        - VOICE
                                        - VOICE_SIGNALING
                                        maxLength: 18446744073709551615
                                        minLength: 0
                                        type: string
                                        x-yang-type: string
                                      state:
                                        type: object
                                        properties:
                                          type:
                                            enum:
                                            - VOICE
                                            - VOICE_SIGNALING
                                            maxLength: 18446744073709551615
                                            minLength: 0
                                            type: string
                                            x-yang-type: string
                                          vlan-id:
                                            format: int32
                                            maximum: 4094
                                            minimum: 0
                                            type: integer
                                            x-range: 0..4094
                                            x-yang-type: uint16
                                          tagged:
                                            format: boolean
                                            type: boolean
                                            x-yang-type: boolean
                                          priority:
                                            format: int32
                                            maximum: 7
                                            minimum: 0
                                            type: integer
                                            x-range: 0..7
                                            x-yang-type: uint8
                                          dscp:
                                            format: int32
                                            maximum: 63
                                            minimum: 0
                                            type: integer
                                            x-range: 0..63
                                            x-yang-type: uint8
                            capabilities:
                              type: object
                              properties:
                                capability:
                                  type: array
                                  items:
                                    type: object
                                    required:
                                    - name
                                    properties:
                                      name:
                                        enum:
                                        - NETWORK_POLICY
                                        - EXT_MDI_POWER_PSE
                                        - LOCATION_ID
                                        - EXT_MDI_POWER_PD
                                        - INVENTORY
                                        format: string
                                        type: string
                                        x-yang-type: identityref
                                      state:
                                        type: object
                                        properties:
                                          name:
                                            enum:
                                            - NETWORK_POLICY
                                            - EXT_MDI_POWER_PSE
                                            - LOCATION_ID
                                            - EXT_MDI_POWER_PD
                                            - INVENTORY
                                            format: string
                                            type: string
                                            x-yang-type: identityref
                                          enabled:
                                            format: boolean
                                            type: boolean
                                            x-yang-type: boolean
    post_list_openconfig_lldp_lldp_interfaces_interface:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface'
    put_list_openconfig_lldp_lldp_interfaces_interface:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface'
    patch_list_openconfig_lldp_lldp_interfaces_interface:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface'
    openconfig_lldp_lldp_interfaces_interface_name:
      type: object
      properties:
        openconfig-lldp:name:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_name:
      type: object
      properties:
        openconfig-lldp:name:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    openconfig_lldp_lldp_interfaces_interface_config:
      type: object
      properties:
        openconfig-lldp:config:
          type: object
          properties:
            name:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            enabled:
              default: 'true'
              format: boolean
              type: boolean
              x-yang-type: boolean
            openconfig-lldp-ext:management-address-ipv4:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
              x-yang-type: string
            openconfig-lldp-ext:management-address-ipv6:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
              x-yang-type: string
            openconfig-lldp-ext:network-policy:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            openconfig-lldp-ext:suppress-tlv-advertisement:
              type: array
              items:
                enum:
                - SYSTEM_DESCRIPTION
                - MANAGEMENT_ADDRESS
                - MED_NETWORK_POLICY
                - SYSTEM_NAME
                - PORT_VLAN_ID
                - VLAN_NAME
                - LINK_AGGREGATION
                - MED_EXT_MDI_POWER
                - CHASSIS_ID
                - MDI_POWER
                - MAX_FRAME_SIZE
                - PORT_ID
                - SYSTEM_CAPABILITIES
                - PORT_DESCRIPTION
                format: string
                type: string
                x-yang-type: identityref
            openconfig-lldp-ext:allowed-vlans:
              type: array
              items:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
            openconfig-lldp-ext:vlan-name-tlv-count:
              default: 10
              format: int32
              maximum: 128
              minimum: 1
              type: integer
              x-range: 1..128
              x-yang-type: uint16
            openconfig-lldp-ext:mode:
              enum:
              - RECEIVE
              - TRANSMIT
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    post_openconfig_lldp_lldp_interfaces_interface_config:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface_config'
    put_openconfig_lldp_lldp_interfaces_interface_config:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface_config'
    patch_openconfig_lldp_lldp_interfaces_interface_config:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface_config'
    get_openconfig_lldp_lldp_interfaces_interface_config:
      type: object
      properties:
        openconfig-lldp:config:
          type: object
          properties:
            name:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            enabled:
              default: 'true'
              format: boolean
              type: boolean
              x-yang-type: boolean
            openconfig-lldp-ext:management-address-ipv4:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
              x-yang-type: string
            openconfig-lldp-ext:management-address-ipv6:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
              x-yang-type: string
            openconfig-lldp-ext:network-policy:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            openconfig-lldp-ext:suppress-tlv-advertisement:
              type: array
              items:
                enum:
                - SYSTEM_DESCRIPTION
                - MANAGEMENT_ADDRESS
                - MED_NETWORK_POLICY
                - SYSTEM_NAME
                - PORT_VLAN_ID
                - VLAN_NAME
                - LINK_AGGREGATION
                - MED_EXT_MDI_POWER
                - CHASSIS_ID
                - MDI_POWER
                - MAX_FRAME_SIZE
                - PORT_ID
                - SYSTEM_CAPABILITIES
                - PORT_DESCRIPTION
                format: string
                type: string
                x-yang-type: identityref
            openconfig-lldp-ext:allowed-vlans:
              type: array
              items:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
            openconfig-lldp-ext:vlan-name-tlv-count:
              default: 10
              format: int32
              maximum: 128
              minimum: 1
              type: integer
              x-range: 1..128
              x-yang-type: uint16
            openconfig-lldp-ext:mode:
              enum:
              - RECEIVE
              - TRANSMIT
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    openconfig_lldp_lldp_interfaces_interface_config_name:
      type: object
      properties:
        openconfig-lldp:name:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_config_name:
      type: object
      properties:
        openconfig-lldp:name:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    openconfig_lldp_lldp_interfaces_interface_config_enabled:
      type: object
      properties:
        openconfig-lldp:enabled:
          default: 'true'
          format: boolean
          type: boolean
          x-yang-type: boolean
    post_openconfig_lldp_lldp_interfaces_interface_config_enabled:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface_config_enabled'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count'
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_mode'
    put_openconfig_lldp_lldp_interfaces_interface_config_enabled:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface_config_enabled'
    patch_openconfig_lldp_lldp_interfaces_interface_config_enabled:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_lldp_interfaces_interface_config_enabled'
    get_openconfig_lldp_lldp_interfaces_interface_config_enabled:
      type: object
      properties:
        openconfig-lldp:enabled:
          default: 'true'
          format: boolean
          type: boolean
          x-yang-type: boolean
    openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4:
      type: object
      properties:
        openconfig-lldp-ext:management-address-ipv4:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
          x-yang-type: string
    put_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4'
    patch_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4'
    get_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv4:
      type: object
      properties:
        openconfig-lldp-ext:management-address-ipv4:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
          x-yang-type: string
    openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6:
      type: object
      properties:
        openconfig-lldp-ext:management-address-ipv6:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
          x-yang-type: string
    put_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6'
    patch_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6'
    get_openconfig_lldp_ext_lldp_interfaces_interface_config_management_address_ipv6:
      type: object
      properties:
        openconfig-lldp-ext:management-address-ipv6:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
          x-yang-type: string
    openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy:
      type: object
      properties:
        openconfig-lldp-ext:network-policy:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    put_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy'
    patch_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy'
    get_openconfig_lldp_ext_lldp_interfaces_interface_config_network_policy:
      type: object
      properties:
        openconfig-lldp-ext:network-policy:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement:
      type: object
      properties:
        openconfig-lldp-ext:suppress-tlv-advertisement:
          type: array
          items:
            enum:
            - SYSTEM_DESCRIPTION
            - MANAGEMENT_ADDRESS
            - MED_NETWORK_POLICY
            - SYSTEM_NAME
            - PORT_VLAN_ID
            - VLAN_NAME
            - LINK_AGGREGATION
            - MED_EXT_MDI_POWER
            - CHASSIS_ID
            - MDI_POWER
            - MAX_FRAME_SIZE
            - PORT_ID
            - SYSTEM_CAPABILITIES
            - PORT_DESCRIPTION
            format: string
            type: string
            x-yang-type: identityref
    put_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement'
    patch_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement'
    get_openconfig_lldp_ext_lldp_interfaces_interface_config_suppress_tlv_advertisement:
      type: object
      properties:
        openconfig-lldp-ext:suppress-tlv-advertisement:
          type: array
          items:
            enum:
            - SYSTEM_DESCRIPTION
            - MANAGEMENT_ADDRESS
            - MED_NETWORK_POLICY
            - SYSTEM_NAME
            - PORT_VLAN_ID
            - VLAN_NAME
            - LINK_AGGREGATION
            - MED_EXT_MDI_POWER
            - CHASSIS_ID
            - MDI_POWER
            - MAX_FRAME_SIZE
            - PORT_ID
            - SYSTEM_CAPABILITIES
            - PORT_DESCRIPTION
            format: string
            type: string
            x-yang-type: identityref
    openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans:
      type: object
      properties:
        openconfig-lldp-ext:allowed-vlans:
          type: array
          items:
            maxLength: 18446744073709551615
            minLength: 0
            type: string
            x-yang-type: string
    put_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans'
    patch_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans'
    get_openconfig_lldp_ext_lldp_interfaces_interface_config_allowed_vlans:
      type: object
      properties:
        openconfig-lldp-ext:allowed-vlans:
          type: array
          items:
            maxLength: 18446744073709551615
            minLength: 0
            type: string
            x-yang-type: string
    openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count:
      type: object
      properties:
        openconfig-lldp-ext:vlan-name-tlv-count:
          default: 10
          format: int32
          maximum: 128
          minimum: 1
          type: integer
          x-range: 1..128
          x-yang-type: uint16
    put_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count'
    patch_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count'
    get_openconfig_lldp_ext_lldp_interfaces_interface_config_vlan_name_tlv_count:
      type: object
      properties:
        openconfig-lldp-ext:vlan-name-tlv-count:
          default: 10
          format: int32
          maximum: 128
          minimum: 1
          type: integer
          x-range: 1..128
          x-yang-type: uint16
    openconfig_lldp_ext_lldp_interfaces_interface_config_mode:
      type: object
      properties:
        openconfig-lldp-ext:mode:
          enum:
          - RECEIVE
          - TRANSMIT
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    put_openconfig_lldp_ext_lldp_interfaces_interface_config_mode:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_mode'
    patch_openconfig_lldp_ext_lldp_interfaces_interface_config_mode:
      allOf:
      - $ref: '#/components/schemas/openconfig_lldp_ext_lldp_interfaces_interface_config_mode'
    get_openconfig_lldp_ext_lldp_interfaces_interface_config_mode:
      type: object
      properties:
        openconfig-lldp-ext:mode:
          enum:
          - RECEIVE
          - TRANSMIT
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_state:
      type: object
      properties:
        openconfig-lldp:state:
          type: object
          properties:
            name:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            enabled:
              default: 'true'
              format: boolean
              type: boolean
              x-yang-type: boolean
            counters:
              type: object
              properties:
                frame-in:
                  format: int64
                  maximum: 18446744073709551615
                  minimum: 0
                  type: string
                  x-yang-type: uint64
                frame-out:
                  format: int64
                  maximum: 18446744073709551615
                  minimum: 0
                  type: string
                  x-yang-type: uint64
                frame-discard:
                  format: int64
                  maximum: 18446744073709551615
                  minimum: 0
                  type: string
                  x-yang-type: uint64
                tlv-unknown:
                  format: int64
                  maximum: 18446744073709551615
                  minimum: 0
                  type: string
                  x-yang-type: uint64
                openconfig-lldp-ext:ageout:
                  format: int64
                  maximum: 18446744073709551615
                  minimum: 0
                  type: string
                  x-yang-type: uint64
            openconfig-lldp-ext:management-address-ipv4:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
              x-yang-type: string
            openconfig-lldp-ext:management-address-ipv6:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
              x-yang-type: string
            openconfig-lldp-ext:network-policy:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            openconfig-lldp-ext:suppress-tlv-advertisement:
              type: array
              items:
                enum:
                - SYSTEM_DESCRIPTION
                - MANAGEMENT_ADDRESS
                - MED_NETWORK_POLICY
                - SYSTEM_NAME
                - PORT_VLAN_ID
                - VLAN_NAME
                - LINK_AGGREGATION
                - MED_EXT_MDI_POWER
                - CHASSIS_ID
                - MDI_POWER
                - MAX_FRAME_SIZE
                - PORT_ID
                - SYSTEM_CAPABILITIES
                - PORT_DESCRIPTION
                format: string
                type: string
                x-yang-type: identityref
            openconfig-lldp-ext:allowed-vlans:
              type: array
              items:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
            openconfig-lldp-ext:vlan-name-tlv-count:
              default: 10
              format: int32
              maximum: 128
              minimum: 1
              type: integer
              x-range: 1..128
              x-yang-type: uint16
            openconfig-lldp-ext:mode:
              enum:
              - RECEIVE
              - TRANSMIT
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_state_name:
      type: object
      properties:
        openconfig-lldp:name:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_state_enabled:
      type: object
      properties:
        openconfig-lldp:enabled:
          default: 'true'
          format: boolean
          type: boolean
          x-yang-type: boolean
    get_openconfig_lldp_lldp_interfaces_interface_state_counters:
      type: object
      properties:
        openconfig-lldp:counters:
          type: object
          properties:
            frame-in:
              format: int64
              maximum: 18446744073709551615
              minimum: 0
              type: string
              x-yang-type: uint64
            frame-out:
              format: int64
              maximum: 18446744073709551615
              minimum: 0
              type: string
              x-yang-type: uint64
            frame-discard:
              format: int64
              maximum: 18446744073709551615
              minimum: 0
              type: string
              x-yang-type: uint64
            tlv-unknown:
              format: int64
              maximum: 18446744073709551615
              minimum: 0
              type: string
              x-yang-type: uint64
            openconfig-lldp-ext:ageout:
              format: int64
              maximum: 18446744073709551615
              minimum: 0
              type: string
              x-yang-type: uint64
    get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_in:
      type: object
      properties:
        openconfig-lldp:frame-in:
          format: int64
          maximum: 18446744073709551615
          minimum: 0
          type: string
          x-yang-type: uint64
    get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_out:
      type: object
      properties:
        openconfig-lldp:frame-out:
          format: int64
          maximum: 18446744073709551615
          minimum: 0
          type: string
          x-yang-type: uint64
    get_openconfig_lldp_lldp_interfaces_interface_state_counters_frame_discard:
      type: object
      properties:
        openconfig-lldp:frame-discard:
          format: int64
          maximum: 18446744073709551615
          minimum: 0
          type: string
          x-yang-type: uint64
    get_openconfig_lldp_lldp_interfaces_interface_state_counters_tlv_unknown:
      type: object
      properties:
        openconfig-lldp:tlv-unknown:
          format: int64
          maximum: 18446744073709551615
          minimum: 0
          type: string
          x-yang-type: uint64
    get_openconfig_lldp_ext_lldp_interfaces_interface_state_counters_ageout:
      type: object
      properties:
        openconfig-lldp-ext:ageout:
          format: int64
          maximum: 18446744073709551615
          minimum: 0
          type: string
          x-yang-type: uint64
    get_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv4:
      type: object
      properties:
        openconfig-lldp-ext:management-address-ipv4:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-pattern: ^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_state_management_address_ipv6:
      type: object
      properties:
        openconfig-lldp-ext:management-address-ipv6:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-pattern: ^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_state_network_policy:
      type: object
      properties:
        openconfig-lldp-ext:network-policy:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_state_suppress_tlv_advertisement:
      type: object
      properties:
        openconfig-lldp-ext:suppress-tlv-advertisement:
          type: array
          items:
            enum:
            - SYSTEM_DESCRIPTION
            - MANAGEMENT_ADDRESS
            - MED_NETWORK_POLICY
            - SYSTEM_NAME
            - PORT_VLAN_ID
            - VLAN_NAME
            - LINK_AGGREGATION
            - MED_EXT_MDI_POWER
            - CHASSIS_ID
            - MDI_POWER
            - MAX_FRAME_SIZE
            - PORT_ID
            - SYSTEM_CAPABILITIES
            - PORT_DESCRIPTION
            format: string
            type: string
            x-yang-type: identityref
    get_openconfig_lldp_ext_lldp_interfaces_interface_state_allowed_vlans:
      type: object
      properties:
        openconfig-lldp-ext:allowed-vlans:
          type: array
          items:
            maxLength: 18446744073709551615
            minLength: 0
            type: string
            x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_state_vlan_name_tlv_count:
      type: object
      properties:
        openconfig-lldp-ext:vlan-name-tlv-count:
          default: 10
          format: int32
          maximum: 128
          minimum: 1
          type: integer
          x-range: 1..128
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_state_mode:
      type: object
      properties:
        openconfig-lldp-ext:mode:
          enum:
          - RECEIVE
          - TRANSMIT
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors:
      type: object
      properties:
        openconfig-lldp:neighbors:
          type: object
          properties:
            neighbor:
              type: array
              items:
                type: object
                required:
                - id
                properties:
                  id:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  state:
                    type: object
                    properties:
                      system-name:
                        maxLength: 255
                        minLength: 0
                        type: string
                        x-length: 0..255
                        x-yang-type: string
                      system-description:
                        maxLength: 255
                        minLength: 0
                        type: string
                        x-length: 0..255
                        x-yang-type: string
                      chassis-id:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      chassis-id-type:
                        enum:
                        - CHASSIS_COMPONENT
                        - INTERFACE_ALIAS
                        - PORT_COMPONENT
                        - MAC_ADDRESS
                        - NETWORK_ADDRESS
                        - INTERFACE_NAME
                        - LOCAL
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      id:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      ttl:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      port-id:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      port-id-type:
                        enum:
                        - INTERFACE_ALIAS
                        - PORT_COMPONENT
                        - MAC_ADDRESS
                        - NETWORK_ADDRESS
                        - INTERFACE_NAME
                        - AGENT_CIRCUIT_ID
                        - LOCAL
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      port-description:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      management-address:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                  custom-tlvs:
                    type: object
                    properties:
                      tlv:
                        type: array
                        items:
                          type: object
                          required:
                          - type
                          - oui
                          - oui-subtype
                          properties:
                            type:
                              format: int32
                              maximum: 2147483647
                              minimum: -2147483648
                              type: integer
                              x-yang-type: int32
                            oui:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            oui-subtype:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            state:
                              type: object
                              properties:
                                type:
                                  format: int32
                                  maximum: 2147483647
                                  minimum: -2147483648
                                  type: integer
                                  x-yang-type: int32
                                oui:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                oui-subtype:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                value:
                                  format: binary
                                  type: string
                                  x-yang-type: binary
                  capabilities:
                    type: object
                    properties:
                      capability:
                        type: array
                        items:
                          type: object
                          required:
                          - name
                          properties:
                            name:
                              enum:
                              - ROUTER
                              - TELEPHONE
                              - OTHER
                              - REPEATER
                              - DOCSIS_CABLE_DEVICE
                              - STATION_ONLY
                              - C_VLAN
                              - S_VLAN
                              - TWO_PORT_MAC_RELAY
                              - WLAN_ACCESS_POINT
                              - MAC_BRIDGE
                              format: string
                              type: string
                              x-yang-type: identityref
                            state:
                              type: object
                              properties:
                                name:
                                  enum:
                                  - ROUTER
                                  - TELEPHONE
                                  - OTHER
                                  - REPEATER
                                  - DOCSIS_CABLE_DEVICE
                                  - STATION_ONLY
                                  - C_VLAN
                                  - S_VLAN
                                  - TWO_PORT_MAC_RELAY
                                  - WLAN_ACCESS_POINT
                                  - MAC_BRIDGE
                                  format: string
                                  type: string
                                  x-yang-type: identityref
                                enabled:
                                  format: boolean
                                  type: boolean
                                  x-yang-type: boolean
                  openconfig-lldp-ext:custom-tlvs-vlan-name:
                    type: object
                    properties:
                      vlan-name-tlv:
                        type: array
                        items:
                          type: object
                          required:
                          - type
                          - oui
                          - oui-subtype
                          - vlan-id
                          properties:
                            type:
                              format: int32
                              maximum: 2147483647
                              minimum: -2147483648
                              type: integer
                              x-yang-type: int32
                            oui:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            oui-subtype:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            vlan-id:
                              format: int32
                              maximum: 4094
                              minimum: 1
                              type: integer
                              x-range: 1..4094
                              x-yang-type: uint16
                            state:
                              type: object
                              properties:
                                type:
                                  format: int32
                                  maximum: 2147483647
                                  minimum: -2147483648
                                  type: integer
                                  x-yang-type: int32
                                oui:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                oui-subtype:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                vlan-id:
                                  format: int32
                                  maximum: 4094
                                  minimum: 1
                                  type: integer
                                  x-range: 1..4094
                                  x-yang-type: uint16
                                value:
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                  openconfig-lldp-ext:mdi-power:
                    type: object
                    properties:
                      state:
                        type: object
                        properties:
                          device-type:
                            enum:
                            - PSE
                            - PD
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-supported:
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
                          power-enabled:
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
                          pair-control:
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
                          power-pair:
                            enum:
                            - SIGNAL
                            - SPARE
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-class:
                            enum:
                            - CLASS0
                            - CLASS1
                            - CLASS2
                            - CLASS3
                            - CLASS4
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-type:
                            enum:
                            - TYPE1
                            - TYPE2
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          pd-power-source:
                            enum:
                            - UNKNOWN
                            - PSE
                            - LOCAL
                            - LOCAL_AND_PSE
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          pse-power-source:
                            enum:
                            - UNKNOWN
                            - PRIMARY
                            - BACKUP
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-priority:
                            enum:
                            - UNKNOWN
                            - CRITICAL
                            - HIGH
                            - LOW
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          requested-power:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          allocated-power:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          tlv-type:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          requested-power-a:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          requested-power-b:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          allocated-power-a:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          allocated-power-b:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                          pd-power-status:
                            enum:
                            - UNKNOWN
                            - 4_PAIR_DUAL_SIG_PD
                            - 2_PAIR_DUAL_SIG_PD
                            - SINGLE_SIG_PD
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          pse-power-pairs-ext:
                            enum:
                            - UNKNOWN
                            - ALTERNATE_A
                            - ALTERNATE_B
                            - BOTH
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-class-ext-a:
                            enum:
                            - UNKNOWN
                            - SINGLE_SIG
                            - CLASS1
                            - CLASS2
                            - CLASS3
                            - CLASS4
                            - CLASS5
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-class-ext-b:
                            enum:
                            - UNKNOWN
                            - SINGLE_SIG
                            - CLASS1
                            - CLASS2
                            - CLASS3
                            - CLASS4
                            - CLASS5
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-class-ext:
                            enum:
                            - UNKNOWN
                            - DUAL_SIG
                            - CLASS1
                            - CLASS2
                            - CLASS3
                            - CLASS4
                            - CLASS5
                            - CLASS6
                            - CLASS7
                            - CLASS8
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-type-ext:
                            enum:
                            - UNKNOWN
                            - TYPE4_DUAL_SIG_PD
                            - TYPE4_SINGLE_SIG_PD
                            - TYPE3_DUAL_SIG_PD
                            - TYPE3_SINGLE_SIG_PD
                            - TYPE4_PSE
                            - TYPE3_PSE
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          pd-load:
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
                  openconfig-lldp-ext:med:
                    type: object
                    properties:
                      state:
                        type: object
                        properties:
                          device-class:
                            enum:
                            - NOT_DEFINED
                            - ENDPOINT_CLASS1
                            - ENDPOINT_CLASS2
                            - ENDPOINT_CLASS3
                            - NETWORK_CONNECTIVITY
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          extended-mdi-power:
                            type: object
                            properties:
                              device-type:
                                enum:
                                - PSE
                                - PD
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              pd-power-source:
                                enum:
                                - UNKNOWN
                                - PSE
                                - LOCAL
                                - LOCAL_AND_PSE
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              pse-power-source:
                                enum:
                                - UNKNOWN
                                - PRIMARY
                                - BACKUP
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              power-priority:
                                enum:
                                - UNKNOWN
                                - CRITICAL
                                - HIGH
                                - LOW
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              power-value:
                                format: int32
                                maximum: 65535
                                minimum: 0
                                type: integer
                                x-yang-type: uint16
                          inventory:
                            type: object
                            properties:
                              hardware-revision:
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              firmware-revision:
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              software-revision:
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              serial-number:
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              manufacturer:
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              model:
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                              asset-id:
                                maxLength: 18446744073709551615
                                minLength: 0
                                type: string
                                x-yang-type: string
                      network-policies:
                        type: object
                        properties:
                          network-policy:
                            type: array
                            items:
                              type: object
                              required:
                              - type
                              properties:
                                type:
                                  enum:
                                  - VOICE
                                  - VOICE_SIGNALING
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                state:
                                  type: object
                                  properties:
                                    type:
                                      enum:
                                      - VOICE
                                      - VOICE_SIGNALING
                                      maxLength: 18446744073709551615
                                      minLength: 0
                                      type: string
                                      x-yang-type: string
                                    vlan-id:
                                      format: int32
                                      maximum: 4094
                                      minimum: 0
                                      type: integer
                                      x-range: 0..4094
                                      x-yang-type: uint16
                                    tagged:
                                      format: boolean
                                      type: boolean
                                      x-yang-type: boolean
                                    priority:
                                      format: int32
                                      maximum: 7
                                      minimum: 0
                                      type: integer
                                      x-range: 0..7
                                      x-yang-type: uint8
                                    dscp:
                                      format: int32
                                      maximum: 63
                                      minimum: 0
                                      type: integer
                                      x-range: 0..63
                                      x-yang-type: uint8
                      capabilities:
                        type: object
                        properties:
                          capability:
                            type: array
                            items:
                              type: object
                              required:
                              - name
                              properties:
                                name:
                                  enum:
                                  - NETWORK_POLICY
                                  - EXT_MDI_POWER_PSE
                                  - LOCATION_ID
                                  - EXT_MDI_POWER_PD
                                  - INVENTORY
                                  format: string
                                  type: string
                                  x-yang-type: identityref
                                state:
                                  type: object
                                  properties:
                                    name:
                                      enum:
                                      - NETWORK_POLICY
                                      - EXT_MDI_POWER_PSE
                                      - LOCATION_ID
                                      - EXT_MDI_POWER_PD
                                      - INVENTORY
                                      format: string
                                      type: string
                                      x-yang-type: identityref
                                    enabled:
                                      format: boolean
                                      type: boolean
                                      x-yang-type: boolean
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor:
      type: object
      properties:
        openconfig-lldp:neighbor:
          type: array
          items:
            type: object
            required:
            - id
            properties:
              id:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
              state:
                type: object
                properties:
                  system-name:
                    maxLength: 255
                    minLength: 0
                    type: string
                    x-length: 0..255
                    x-yang-type: string
                  system-description:
                    maxLength: 255
                    minLength: 0
                    type: string
                    x-length: 0..255
                    x-yang-type: string
                  chassis-id:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  chassis-id-type:
                    enum:
                    - CHASSIS_COMPONENT
                    - INTERFACE_ALIAS
                    - PORT_COMPONENT
                    - MAC_ADDRESS
                    - NETWORK_ADDRESS
                    - INTERFACE_NAME
                    - LOCAL
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  id:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  ttl:
                    format: int32
                    maximum: 65535
                    minimum: 0
                    type: integer
                    x-yang-type: uint16
                  port-id:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  port-id-type:
                    enum:
                    - INTERFACE_ALIAS
                    - PORT_COMPONENT
                    - MAC_ADDRESS
                    - NETWORK_ADDRESS
                    - INTERFACE_NAME
                    - AGENT_CIRCUIT_ID
                    - LOCAL
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  port-description:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  management-address:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
              custom-tlvs:
                type: object
                properties:
                  tlv:
                    type: array
                    items:
                      type: object
                      required:
                      - type
                      - oui
                      - oui-subtype
                      properties:
                        type:
                          format: int32
                          maximum: 2147483647
                          minimum: -2147483648
                          type: integer
                          x-yang-type: int32
                        oui:
                          maxLength: 18446744073709551615
                          minLength: 0
                          type: string
                          x-yang-type: string
                        oui-subtype:
                          maxLength: 18446744073709551615
                          minLength: 0
                          type: string
                          x-yang-type: string
                        state:
                          type: object
                          properties:
                            type:
                              format: int32
                              maximum: 2147483647
                              minimum: -2147483648
                              type: integer
                              x-yang-type: int32
                            oui:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            oui-subtype:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            value:
                              format: binary
                              type: string
                              x-yang-type: binary
              capabilities:
                type: object
                properties:
                  capability:
                    type: array
                    items:
                      type: object
                      required:
                      - name
                      properties:
                        name:
                          enum:
                          - ROUTER
                          - TELEPHONE
                          - OTHER
                          - REPEATER
                          - DOCSIS_CABLE_DEVICE
                          - STATION_ONLY
                          - C_VLAN
                          - S_VLAN
                          - TWO_PORT_MAC_RELAY
                          - WLAN_ACCESS_POINT
                          - MAC_BRIDGE
                          format: string
                          type: string
                          x-yang-type: identityref
                        state:
                          type: object
                          properties:
                            name:
                              enum:
                              - ROUTER
                              - TELEPHONE
                              - OTHER
                              - REPEATER
                              - DOCSIS_CABLE_DEVICE
                              - STATION_ONLY
                              - C_VLAN
                              - S_VLAN
                              - TWO_PORT_MAC_RELAY
                              - WLAN_ACCESS_POINT
                              - MAC_BRIDGE
                              format: string
                              type: string
                              x-yang-type: identityref
                            enabled:
                              format: boolean
                              type: boolean
                              x-yang-type: boolean
              openconfig-lldp-ext:custom-tlvs-vlan-name:
                type: object
                properties:
                  vlan-name-tlv:
                    type: array
                    items:
                      type: object
                      required:
                      - type
                      - oui
                      - oui-subtype
                      - vlan-id
                      properties:
                        type:
                          format: int32
                          maximum: 2147483647
                          minimum: -2147483648
                          type: integer
                          x-yang-type: int32
                        oui:
                          maxLength: 18446744073709551615
                          minLength: 0
                          type: string
                          x-yang-type: string
                        oui-subtype:
                          maxLength: 18446744073709551615
                          minLength: 0
                          type: string
                          x-yang-type: string
                        vlan-id:
                          format: int32
                          maximum: 4094
                          minimum: 1
                          type: integer
                          x-range: 1..4094
                          x-yang-type: uint16
                        state:
                          type: object
                          properties:
                            type:
                              format: int32
                              maximum: 2147483647
                              minimum: -2147483648
                              type: integer
                              x-yang-type: int32
                            oui:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            oui-subtype:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            vlan-id:
                              format: int32
                              maximum: 4094
                              minimum: 1
                              type: integer
                              x-range: 1..4094
                              x-yang-type: uint16
                            value:
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
              openconfig-lldp-ext:mdi-power:
                type: object
                properties:
                  state:
                    type: object
                    properties:
                      device-type:
                        enum:
                        - PSE
                        - PD
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      power-supported:
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
                      power-enabled:
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
                      pair-control:
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
                      power-pair:
                        enum:
                        - SIGNAL
                        - SPARE
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      power-class:
                        enum:
                        - CLASS0
                        - CLASS1
                        - CLASS2
                        - CLASS3
                        - CLASS4
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      power-type:
                        enum:
                        - TYPE1
                        - TYPE2
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      pd-power-source:
                        enum:
                        - UNKNOWN
                        - PSE
                        - LOCAL
                        - LOCAL_AND_PSE
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      pse-power-source:
                        enum:
                        - UNKNOWN
                        - PRIMARY
                        - BACKUP
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      power-priority:
                        enum:
                        - UNKNOWN
                        - CRITICAL
                        - HIGH
                        - LOW
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      requested-power:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      allocated-power:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      tlv-type:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      requested-power-a:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      requested-power-b:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      allocated-power-a:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      allocated-power-b:
                        format: int32
                        maximum: 65535
                        minimum: 0
                        type: integer
                        x-yang-type: uint16
                      pd-power-status:
                        enum:
                        - UNKNOWN
                        - 4_PAIR_DUAL_SIG_PD
                        - 2_PAIR_DUAL_SIG_PD
                        - SINGLE_SIG_PD
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      pse-power-pairs-ext:
                        enum:
                        - UNKNOWN
                        - ALTERNATE_A
                        - ALTERNATE_B
                        - BOTH
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      power-class-ext-a:
                        enum:
                        - UNKNOWN
                        - SINGLE_SIG
                        - CLASS1
                        - CLASS2
                        - CLASS3
                        - CLASS4
                        - CLASS5
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      power-class-ext-b:
                        enum:
                        - UNKNOWN
                        - SINGLE_SIG
                        - CLASS1
                        - CLASS2
                        - CLASS3
                        - CLASS4
                        - CLASS5
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      power-class-ext:
                        enum:
                        - UNKNOWN
                        - DUAL_SIG
                        - CLASS1
                        - CLASS2
                        - CLASS3
                        - CLASS4
                        - CLASS5
                        - CLASS6
                        - CLASS7
                        - CLASS8
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      power-type-ext:
                        enum:
                        - UNKNOWN
                        - TYPE4_DUAL_SIG_PD
                        - TYPE4_SINGLE_SIG_PD
                        - TYPE3_DUAL_SIG_PD
                        - TYPE3_SINGLE_SIG_PD
                        - TYPE4_PSE
                        - TYPE3_PSE
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      pd-load:
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
              openconfig-lldp-ext:med:
                type: object
                properties:
                  state:
                    type: object
                    properties:
                      device-class:
                        enum:
                        - NOT_DEFINED
                        - ENDPOINT_CLASS1
                        - ENDPOINT_CLASS2
                        - ENDPOINT_CLASS3
                        - NETWORK_CONNECTIVITY
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      extended-mdi-power:
                        type: object
                        properties:
                          device-type:
                            enum:
                            - PSE
                            - PD
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          pd-power-source:
                            enum:
                            - UNKNOWN
                            - PSE
                            - LOCAL
                            - LOCAL_AND_PSE
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          pse-power-source:
                            enum:
                            - UNKNOWN
                            - PRIMARY
                            - BACKUP
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-priority:
                            enum:
                            - UNKNOWN
                            - CRITICAL
                            - HIGH
                            - LOW
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          power-value:
                            format: int32
                            maximum: 65535
                            minimum: 0
                            type: integer
                            x-yang-type: uint16
                      inventory:
                        type: object
                        properties:
                          hardware-revision:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          firmware-revision:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          software-revision:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          serial-number:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          manufacturer:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          model:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          asset-id:
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                  network-policies:
                    type: object
                    properties:
                      network-policy:
                        type: array
                        items:
                          type: object
                          required:
                          - type
                          properties:
                            type:
                              enum:
                              - VOICE
                              - VOICE_SIGNALING
                              maxLength: 18446744073709551615
                              minLength: 0
                              type: string
                              x-yang-type: string
                            state:
                              type: object
                              properties:
                                type:
                                  enum:
                                  - VOICE
                                  - VOICE_SIGNALING
                                  maxLength: 18446744073709551615
                                  minLength: 0
                                  type: string
                                  x-yang-type: string
                                vlan-id:
                                  format: int32
                                  maximum: 4094
                                  minimum: 0
                                  type: integer
                                  x-range: 0..4094
                                  x-yang-type: uint16
                                tagged:
                                  format: boolean
                                  type: boolean
                                  x-yang-type: boolean
                                priority:
                                  format: int32
                                  maximum: 7
                                  minimum: 0
                                  type: integer
                                  x-range: 0..7
                                  x-yang-type: uint8
                                dscp:
                                  format: int32
                                  maximum: 63
                                  minimum: 0
                                  type: integer
                                  x-range: 0..63
                                  x-yang-type: uint8
                  capabilities:
                    type: object
                    properties:
                      capability:
                        type: array
                        items:
                          type: object
                          required:
                          - name
                          properties:
                            name:
                              enum:
                              - NETWORK_POLICY
                              - EXT_MDI_POWER_PSE
                              - LOCATION_ID
                              - EXT_MDI_POWER_PD
                              - INVENTORY
                              format: string
                              type: string
                              x-yang-type: identityref
                            state:
                              type: object
                              properties:
                                name:
                                  enum:
                                  - NETWORK_POLICY
                                  - EXT_MDI_POWER_PSE
                                  - LOCATION_ID
                                  - EXT_MDI_POWER_PD
                                  - INVENTORY
                                  format: string
                                  type: string
                                  x-yang-type: identityref
                                enabled:
                                  format: boolean
                                  type: boolean
                                  x-yang-type: boolean
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_id:
      type: object
      properties:
        openconfig-lldp:id:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state:
      type: object
      properties:
        openconfig-lldp:state:
          type: object
          properties:
            system-name:
              maxLength: 255
              minLength: 0
              type: string
              x-length: 0..255
              x-yang-type: string
            system-description:
              maxLength: 255
              minLength: 0
              type: string
              x-length: 0..255
              x-yang-type: string
            chassis-id:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            chassis-id-type:
              enum:
              - CHASSIS_COMPONENT
              - INTERFACE_ALIAS
              - PORT_COMPONENT
              - MAC_ADDRESS
              - NETWORK_ADDRESS
              - INTERFACE_NAME
              - LOCAL
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            id:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            ttl:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            port-id:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            port-id-type:
              enum:
              - INTERFACE_ALIAS
              - PORT_COMPONENT
              - MAC_ADDRESS
              - NETWORK_ADDRESS
              - INTERFACE_NAME
              - AGENT_CIRCUIT_ID
              - LOCAL
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            port-description:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            management-address:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_name:
      type: object
      properties:
        openconfig-lldp:system-name:
          maxLength: 255
          minLength: 0
          type: string
          x-length: 0..255
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_system_description:
      type: object
      properties:
        openconfig-lldp:system-description:
          maxLength: 255
          minLength: 0
          type: string
          x-length: 0..255
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id:
      type: object
      properties:
        openconfig-lldp:chassis-id:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_chassis_id_type:
      type: object
      properties:
        openconfig-lldp:chassis-id-type:
          enum:
          - CHASSIS_COMPONENT
          - INTERFACE_ALIAS
          - PORT_COMPONENT
          - MAC_ADDRESS
          - NETWORK_ADDRESS
          - INTERFACE_NAME
          - LOCAL
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_id:
      type: object
      properties:
        openconfig-lldp:id:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_ttl:
      type: object
      properties:
        openconfig-lldp:ttl:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id:
      type: object
      properties:
        openconfig-lldp:port-id:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_id_type:
      type: object
      properties:
        openconfig-lldp:port-id-type:
          enum:
          - INTERFACE_ALIAS
          - PORT_COMPONENT
          - MAC_ADDRESS
          - NETWORK_ADDRESS
          - INTERFACE_NAME
          - AGENT_CIRCUIT_ID
          - LOCAL
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_port_description:
      type: object
      properties:
        openconfig-lldp:port-description:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_state_management_address:
      type: object
      properties:
        openconfig-lldp:management-address:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs:
      type: object
      properties:
        openconfig-lldp:custom-tlvs:
          type: object
          properties:
            tlv:
              type: array
              items:
                type: object
                required:
                - type
                - oui
                - oui-subtype
                properties:
                  type:
                    format: int32
                    maximum: 2147483647
                    minimum: -2147483648
                    type: integer
                    x-yang-type: int32
                  oui:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  oui-subtype:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  state:
                    type: object
                    properties:
                      type:
                        format: int32
                        maximum: 2147483647
                        minimum: -2147483648
                        type: integer
                        x-yang-type: int32
                      oui:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      oui-subtype:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      value:
                        format: binary
                        type: string
                        x-yang-type: binary
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv:
      type: object
      properties:
        openconfig-lldp:tlv:
          type: array
          items:
            type: object
            required:
            - type
            - oui
            - oui-subtype
            properties:
              type:
                format: int32
                maximum: 2147483647
                minimum: -2147483648
                type: integer
                x-yang-type: int32
              oui:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
              oui-subtype:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
              state:
                type: object
                properties:
                  type:
                    format: int32
                    maximum: 2147483647
                    minimum: -2147483648
                    type: integer
                    x-yang-type: int32
                  oui:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  oui-subtype:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  value:
                    format: binary
                    type: string
                    x-yang-type: binary
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_type:
      type: object
      properties:
        openconfig-lldp:type:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui:
      type: object
      properties:
        openconfig-lldp:oui:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_oui_subtype:
      type: object
      properties:
        openconfig-lldp:oui-subtype:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state:
      type: object
      properties:
        openconfig-lldp:state:
          type: object
          properties:
            type:
              format: int32
              maximum: 2147483647
              minimum: -2147483648
              type: integer
              x-yang-type: int32
            oui:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            oui-subtype:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            value:
              format: binary
              type: string
              x-yang-type: binary
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_type:
      type: object
      properties:
        openconfig-lldp:type:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui:
      type: object
      properties:
        openconfig-lldp:oui:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_oui_subtype:
      type: object
      properties:
        openconfig-lldp:oui-subtype:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_tlv_state_value:
      type: object
      properties:
        openconfig-lldp:value:
          format: binary
          type: string
          x-yang-type: binary
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities:
      type: object
      properties:
        openconfig-lldp:capabilities:
          type: object
          properties:
            capability:
              type: array
              items:
                type: object
                required:
                - name
                properties:
                  name:
                    enum:
                    - ROUTER
                    - TELEPHONE
                    - OTHER
                    - REPEATER
                    - DOCSIS_CABLE_DEVICE
                    - STATION_ONLY
                    - C_VLAN
                    - S_VLAN
                    - TWO_PORT_MAC_RELAY
                    - WLAN_ACCESS_POINT
                    - MAC_BRIDGE
                    format: string
                    type: string
                    x-yang-type: identityref
                  state:
                    type: object
                    properties:
                      name:
                        enum:
                        - ROUTER
                        - TELEPHONE
                        - OTHER
                        - REPEATER
                        - DOCSIS_CABLE_DEVICE
                        - STATION_ONLY
                        - C_VLAN
                        - S_VLAN
                        - TWO_PORT_MAC_RELAY
                        - WLAN_ACCESS_POINT
                        - MAC_BRIDGE
                        format: string
                        type: string
                        x-yang-type: identityref
                      enabled:
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability:
      type: object
      properties:
        openconfig-lldp:capability:
          type: array
          items:
            type: object
            required:
            - name
            properties:
              name:
                enum:
                - ROUTER
                - TELEPHONE
                - OTHER
                - REPEATER
                - DOCSIS_CABLE_DEVICE
                - STATION_ONLY
                - C_VLAN
                - S_VLAN
                - TWO_PORT_MAC_RELAY
                - WLAN_ACCESS_POINT
                - MAC_BRIDGE
                format: string
                type: string
                x-yang-type: identityref
              state:
                type: object
                properties:
                  name:
                    enum:
                    - ROUTER
                    - TELEPHONE
                    - OTHER
                    - REPEATER
                    - DOCSIS_CABLE_DEVICE
                    - STATION_ONLY
                    - C_VLAN
                    - S_VLAN
                    - TWO_PORT_MAC_RELAY
                    - WLAN_ACCESS_POINT
                    - MAC_BRIDGE
                    format: string
                    type: string
                    x-yang-type: identityref
                  enabled:
                    format: boolean
                    type: boolean
                    x-yang-type: boolean
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_name:
      type: object
      properties:
        openconfig-lldp:name:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state:
      type: object
      properties:
        openconfig-lldp:state:
          type: object
          properties:
            name:
              enum:
              - ROUTER
              - TELEPHONE
              - OTHER
              - REPEATER
              - DOCSIS_CABLE_DEVICE
              - STATION_ONLY
              - C_VLAN
              - S_VLAN
              - TWO_PORT_MAC_RELAY
              - WLAN_ACCESS_POINT
              - MAC_BRIDGE
              format: string
              type: string
              x-yang-type: identityref
            enabled:
              format: boolean
              type: boolean
              x-yang-type: boolean
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_name:
      type: object
      properties:
        openconfig-lldp:name:
          enum:
          - ROUTER
          - TELEPHONE
          - OTHER
          - REPEATER
          - DOCSIS_CABLE_DEVICE
          - STATION_ONLY
          - C_VLAN
          - S_VLAN
          - TWO_PORT_MAC_RELAY
          - WLAN_ACCESS_POINT
          - MAC_BRIDGE
          format: string
          type: string
          x-yang-type: identityref
    get_openconfig_lldp_lldp_interfaces_interface_neighbors_neighbor_capabilities_capability_state_enabled:
      type: object
      properties:
        openconfig-lldp:enabled:
          format: boolean
          type: boolean
          x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name:
      type: object
      properties:
        openconfig-lldp-ext:custom-tlvs-vlan-name:
          type: object
          properties:
            vlan-name-tlv:
              type: array
              items:
                type: object
                required:
                - type
                - oui
                - oui-subtype
                - vlan-id
                properties:
                  type:
                    format: int32
                    maximum: 2147483647
                    minimum: -2147483648
                    type: integer
                    x-yang-type: int32
                  oui:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  oui-subtype:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  vlan-id:
                    format: int32
                    maximum: 4094
                    minimum: 1
                    type: integer
                    x-range: 1..4094
                    x-yang-type: uint16
                  state:
                    type: object
                    properties:
                      type:
                        format: int32
                        maximum: 2147483647
                        minimum: -2147483648
                        type: integer
                        x-yang-type: int32
                      oui:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      oui-subtype:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      vlan-id:
                        format: int32
                        maximum: 4094
                        minimum: 1
                        type: integer
                        x-range: 1..4094
                        x-yang-type: uint16
                      value:
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv:
      type: object
      properties:
        openconfig-lldp-ext:vlan-name-tlv:
          type: array
          items:
            type: object
            required:
            - type
            - oui
            - oui-subtype
            - vlan-id
            properties:
              type:
                format: int32
                maximum: 2147483647
                minimum: -2147483648
                type: integer
                x-yang-type: int32
              oui:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
              oui-subtype:
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
              vlan-id:
                format: int32
                maximum: 4094
                minimum: 1
                type: integer
                x-range: 1..4094
                x-yang-type: uint16
              state:
                type: object
                properties:
                  type:
                    format: int32
                    maximum: 2147483647
                    minimum: -2147483648
                    type: integer
                    x-yang-type: int32
                  oui:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  oui-subtype:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  vlan-id:
                    format: int32
                    maximum: 4094
                    minimum: 1
                    type: integer
                    x-range: 1..4094
                    x-yang-type: uint16
                  value:
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_type:
      type: object
      properties:
        openconfig-lldp-ext:type:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui:
      type: object
      properties:
        openconfig-lldp-ext:oui:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_oui_subtype:
      type: object
      properties:
        openconfig-lldp-ext:oui-subtype:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_vlan_id:
      type: object
      properties:
        openconfig-lldp-ext:vlan-id:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state:
      type: object
      properties:
        openconfig-lldp-ext:state:
          type: object
          properties:
            type:
              format: int32
              maximum: 2147483647
              minimum: -2147483648
              type: integer
              x-yang-type: int32
            oui:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            oui-subtype:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            vlan-id:
              format: int32
              maximum: 4094
              minimum: 1
              type: integer
              x-range: 1..4094
              x-yang-type: uint16
            value:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_type:
      type: object
      properties:
        openconfig-lldp-ext:type:
          format: int32
          maximum: 2147483647
          minimum: -2147483648
          type: integer
          x-yang-type: int32
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui:
      type: object
      properties:
        openconfig-lldp-ext:oui:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_oui_subtype:
      type: object
      properties:
        openconfig-lldp-ext:oui-subtype:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_vlan_id:
      type: object
      properties:
        openconfig-lldp-ext:vlan-id:
          format: int32
          maximum: 4094
          minimum: 1
          type: integer
          x-range: 1..4094
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_custom_tlvs_vlan_name_vlan_name_tlv_state_value:
      type: object
      properties:
        openconfig-lldp-ext:value:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power:
      type: object
      properties:
        openconfig-lldp-ext:mdi-power:
          type: object
          properties:
            state:
              type: object
              properties:
                device-type:
                  enum:
                  - PSE
                  - PD
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-supported:
                  format: boolean
                  type: boolean
                  x-yang-type: boolean
                power-enabled:
                  format: boolean
                  type: boolean
                  x-yang-type: boolean
                pair-control:
                  format: boolean
                  type: boolean
                  x-yang-type: boolean
                power-pair:
                  enum:
                  - SIGNAL
                  - SPARE
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-class:
                  enum:
                  - CLASS0
                  - CLASS1
                  - CLASS2
                  - CLASS3
                  - CLASS4
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-type:
                  enum:
                  - TYPE1
                  - TYPE2
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                pd-power-source:
                  enum:
                  - UNKNOWN
                  - PSE
                  - LOCAL
                  - LOCAL_AND_PSE
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                pse-power-source:
                  enum:
                  - UNKNOWN
                  - PRIMARY
                  - BACKUP
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-priority:
                  enum:
                  - UNKNOWN
                  - CRITICAL
                  - HIGH
                  - LOW
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                requested-power:
                  format: int32
                  maximum: 65535
                  minimum: 0
                  type: integer
                  x-yang-type: uint16
                allocated-power:
                  format: int32
                  maximum: 65535
                  minimum: 0
                  type: integer
                  x-yang-type: uint16
                tlv-type:
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                requested-power-a:
                  format: int32
                  maximum: 65535
                  minimum: 0
                  type: integer
                  x-yang-type: uint16
                requested-power-b:
                  format: int32
                  maximum: 65535
                  minimum: 0
                  type: integer
                  x-yang-type: uint16
                allocated-power-a:
                  format: int32
                  maximum: 65535
                  minimum: 0
                  type: integer
                  x-yang-type: uint16
                allocated-power-b:
                  format: int32
                  maximum: 65535
                  minimum: 0
                  type: integer
                  x-yang-type: uint16
                pd-power-status:
                  enum:
                  - UNKNOWN
                  - 4_PAIR_DUAL_SIG_PD
                  - 2_PAIR_DUAL_SIG_PD
                  - SINGLE_SIG_PD
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                pse-power-pairs-ext:
                  enum:
                  - UNKNOWN
                  - ALTERNATE_A
                  - ALTERNATE_B
                  - BOTH
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-class-ext-a:
                  enum:
                  - UNKNOWN
                  - SINGLE_SIG
                  - CLASS1
                  - CLASS2
                  - CLASS3
                  - CLASS4
                  - CLASS5
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-class-ext-b:
                  enum:
                  - UNKNOWN
                  - SINGLE_SIG
                  - CLASS1
                  - CLASS2
                  - CLASS3
                  - CLASS4
                  - CLASS5
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-class-ext:
                  enum:
                  - UNKNOWN
                  - DUAL_SIG
                  - CLASS1
                  - CLASS2
                  - CLASS3
                  - CLASS4
                  - CLASS5
                  - CLASS6
                  - CLASS7
                  - CLASS8
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-type-ext:
                  enum:
                  - UNKNOWN
                  - TYPE4_DUAL_SIG_PD
                  - TYPE4_SINGLE_SIG_PD
                  - TYPE3_DUAL_SIG_PD
                  - TYPE3_SINGLE_SIG_PD
                  - TYPE4_PSE
                  - TYPE3_PSE
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                pd-load:
                  format: boolean
                  type: boolean
                  x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state:
      type: object
      properties:
        openconfig-lldp-ext:state:
          type: object
          properties:
            device-type:
              enum:
              - PSE
              - PD
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-supported:
              format: boolean
              type: boolean
              x-yang-type: boolean
            power-enabled:
              format: boolean
              type: boolean
              x-yang-type: boolean
            pair-control:
              format: boolean
              type: boolean
              x-yang-type: boolean
            power-pair:
              enum:
              - SIGNAL
              - SPARE
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-class:
              enum:
              - CLASS0
              - CLASS1
              - CLASS2
              - CLASS3
              - CLASS4
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-type:
              enum:
              - TYPE1
              - TYPE2
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            pd-power-source:
              enum:
              - UNKNOWN
              - PSE
              - LOCAL
              - LOCAL_AND_PSE
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            pse-power-source:
              enum:
              - UNKNOWN
              - PRIMARY
              - BACKUP
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-priority:
              enum:
              - UNKNOWN
              - CRITICAL
              - HIGH
              - LOW
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            requested-power:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            allocated-power:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            tlv-type:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            requested-power-a:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            requested-power-b:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            allocated-power-a:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            allocated-power-b:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
            pd-power-status:
              enum:
              - UNKNOWN
              - 4_PAIR_DUAL_SIG_PD
              - 2_PAIR_DUAL_SIG_PD
              - SINGLE_SIG_PD
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            pse-power-pairs-ext:
              enum:
              - UNKNOWN
              - ALTERNATE_A
              - ALTERNATE_B
              - BOTH
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-class-ext-a:
              enum:
              - UNKNOWN
              - SINGLE_SIG
              - CLASS1
              - CLASS2
              - CLASS3
              - CLASS4
              - CLASS5
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-class-ext-b:
              enum:
              - UNKNOWN
              - SINGLE_SIG
              - CLASS1
              - CLASS2
              - CLASS3
              - CLASS4
              - CLASS5
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-class-ext:
              enum:
              - UNKNOWN
              - DUAL_SIG
              - CLASS1
              - CLASS2
              - CLASS3
              - CLASS4
              - CLASS5
              - CLASS6
              - CLASS7
              - CLASS8
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-type-ext:
              enum:
              - UNKNOWN
              - TYPE4_DUAL_SIG_PD
              - TYPE4_SINGLE_SIG_PD
              - TYPE3_DUAL_SIG_PD
              - TYPE3_SINGLE_SIG_PD
              - TYPE4_PSE
              - TYPE3_PSE
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            pd-load:
              format: boolean
              type: boolean
              x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_device_type:
      type: object
      properties:
        openconfig-lldp-ext:device-type:
          enum:
          - PSE
          - PD
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_supported:
      type: object
      properties:
        openconfig-lldp-ext:power-supported:
          format: boolean
          type: boolean
          x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_enabled:
      type: object
      properties:
        openconfig-lldp-ext:power-enabled:
          format: boolean
          type: boolean
          x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pair_control:
      type: object
      properties:
        openconfig-lldp-ext:pair-control:
          format: boolean
          type: boolean
          x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_pair:
      type: object
      properties:
        openconfig-lldp-ext:power-pair:
          enum:
          - SIGNAL
          - SPARE
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class:
      type: object
      properties:
        openconfig-lldp-ext:power-class:
          enum:
          - CLASS0
          - CLASS1
          - CLASS2
          - CLASS3
          - CLASS4
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type:
      type: object
      properties:
        openconfig-lldp-ext:power-type:
          enum:
          - TYPE1
          - TYPE2
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_source:
      type: object
      properties:
        openconfig-lldp-ext:pd-power-source:
          enum:
          - UNKNOWN
          - PSE
          - LOCAL
          - LOCAL_AND_PSE
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_source:
      type: object
      properties:
        openconfig-lldp-ext:pse-power-source:
          enum:
          - UNKNOWN
          - PRIMARY
          - BACKUP
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_priority:
      type: object
      properties:
        openconfig-lldp-ext:power-priority:
          enum:
          - UNKNOWN
          - CRITICAL
          - HIGH
          - LOW
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power:
      type: object
      properties:
        openconfig-lldp-ext:requested-power:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power:
      type: object
      properties:
        openconfig-lldp-ext:allocated-power:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_tlv_type:
      type: object
      properties:
        openconfig-lldp-ext:tlv-type:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_a:
      type: object
      properties:
        openconfig-lldp-ext:requested-power-a:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_requested_power_b:
      type: object
      properties:
        openconfig-lldp-ext:requested-power-b:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_a:
      type: object
      properties:
        openconfig-lldp-ext:allocated-power-a:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_allocated_power_b:
      type: object
      properties:
        openconfig-lldp-ext:allocated-power-b:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_power_status:
      type: object
      properties:
        openconfig-lldp-ext:pd-power-status:
          enum:
          - UNKNOWN
          - 4_PAIR_DUAL_SIG_PD
          - 2_PAIR_DUAL_SIG_PD
          - SINGLE_SIG_PD
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pse_power_pairs_ext:
      type: object
      properties:
        openconfig-lldp-ext:pse-power-pairs-ext:
          enum:
          - UNKNOWN
          - ALTERNATE_A
          - ALTERNATE_B
          - BOTH
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_a:
      type: object
      properties:
        openconfig-lldp-ext:power-class-ext-a:
          enum:
          - UNKNOWN
          - SINGLE_SIG
          - CLASS1
          - CLASS2
          - CLASS3
          - CLASS4
          - CLASS5
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext_b:
      type: object
      properties:
        openconfig-lldp-ext:power-class-ext-b:
          enum:
          - UNKNOWN
          - SINGLE_SIG
          - CLASS1
          - CLASS2
          - CLASS3
          - CLASS4
          - CLASS5
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_class_ext:
      type: object
      properties:
        openconfig-lldp-ext:power-class-ext:
          enum:
          - UNKNOWN
          - DUAL_SIG
          - CLASS1
          - CLASS2
          - CLASS3
          - CLASS4
          - CLASS5
          - CLASS6
          - CLASS7
          - CLASS8
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_power_type_ext:
      type: object
      properties:
        openconfig-lldp-ext:power-type-ext:
          enum:
          - UNKNOWN
          - TYPE4_DUAL_SIG_PD
          - TYPE4_SINGLE_SIG_PD
          - TYPE3_DUAL_SIG_PD
          - TYPE3_SINGLE_SIG_PD
          - TYPE4_PSE
          - TYPE3_PSE
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_mdi_power_state_pd_load:
      type: object
      properties:
        openconfig-lldp-ext:pd-load:
          format: boolean
          type: boolean
          x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med:
      type: object
      properties:
        openconfig-lldp-ext:med:
          type: object
          properties:
            state:
              type: object
              properties:
                device-class:
                  enum:
                  - NOT_DEFINED
                  - ENDPOINT_CLASS1
                  - ENDPOINT_CLASS2
                  - ENDPOINT_CLASS3
                  - NETWORK_CONNECTIVITY
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                extended-mdi-power:
                  type: object
                  properties:
                    device-type:
                      enum:
                      - PSE
                      - PD
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    pd-power-source:
                      enum:
                      - UNKNOWN
                      - PSE
                      - LOCAL
                      - LOCAL_AND_PSE
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    pse-power-source:
                      enum:
                      - UNKNOWN
                      - PRIMARY
                      - BACKUP
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    power-priority:
                      enum:
                      - UNKNOWN
                      - CRITICAL
                      - HIGH
                      - LOW
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    power-value:
                      format: int32
                      maximum: 65535
                      minimum: 0
                      type: integer
                      x-yang-type: uint16
                inventory:
                  type: object
                  properties:
                    hardware-revision:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    firmware-revision:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    software-revision:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    serial-number:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    manufacturer:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    model:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
                    asset-id:
                      maxLength: 18446744073709551615
                      minLength: 0
                      type: string
                      x-yang-type: string
            network-policies:
              type: object
              properties:
                network-policy:
                  type: array
                  items:
                    type: object
                    required:
                    - type
                    properties:
                      type:
                        enum:
                        - VOICE
                        - VOICE_SIGNALING
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      state:
                        type: object
                        properties:
                          type:
                            enum:
                            - VOICE
                            - VOICE_SIGNALING
                            maxLength: 18446744073709551615
                            minLength: 0
                            type: string
                            x-yang-type: string
                          vlan-id:
                            format: int32
                            maximum: 4094
                            minimum: 0
                            type: integer
                            x-range: 0..4094
                            x-yang-type: uint16
                          tagged:
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
                          priority:
                            format: int32
                            maximum: 7
                            minimum: 0
                            type: integer
                            x-range: 0..7
                            x-yang-type: uint8
                          dscp:
                            format: int32
                            maximum: 63
                            minimum: 0
                            type: integer
                            x-range: 0..63
                            x-yang-type: uint8
            capabilities:
              type: object
              properties:
                capability:
                  type: array
                  items:
                    type: object
                    required:
                    - name
                    properties:
                      name:
                        enum:
                        - NETWORK_POLICY
                        - EXT_MDI_POWER_PSE
                        - LOCATION_ID
                        - EXT_MDI_POWER_PD
                        - INVENTORY
                        format: string
                        type: string
                        x-yang-type: identityref
                      state:
                        type: object
                        properties:
                          name:
                            enum:
                            - NETWORK_POLICY
                            - EXT_MDI_POWER_PSE
                            - LOCATION_ID
                            - EXT_MDI_POWER_PD
                            - INVENTORY
                            format: string
                            type: string
                            x-yang-type: identityref
                          enabled:
                            format: boolean
                            type: boolean
                            x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state:
      type: object
      properties:
        openconfig-lldp-ext:state:
          type: object
          properties:
            device-class:
              enum:
              - NOT_DEFINED
              - ENDPOINT_CLASS1
              - ENDPOINT_CLASS2
              - ENDPOINT_CLASS3
              - NETWORK_CONNECTIVITY
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            extended-mdi-power:
              type: object
              properties:
                device-type:
                  enum:
                  - PSE
                  - PD
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                pd-power-source:
                  enum:
                  - UNKNOWN
                  - PSE
                  - LOCAL
                  - LOCAL_AND_PSE
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                pse-power-source:
                  enum:
                  - UNKNOWN
                  - PRIMARY
                  - BACKUP
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-priority:
                  enum:
                  - UNKNOWN
                  - CRITICAL
                  - HIGH
                  - LOW
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                power-value:
                  format: int32
                  maximum: 65535
                  minimum: 0
                  type: integer
                  x-yang-type: uint16
            inventory:
              type: object
              properties:
                hardware-revision:
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                firmware-revision:
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                software-revision:
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                serial-number:
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                manufacturer:
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                model:
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
                asset-id:
                  maxLength: 18446744073709551615
                  minLength: 0
                  type: string
                  x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_device_class:
      type: object
      properties:
        openconfig-lldp-ext:device-class:
          enum:
          - NOT_DEFINED
          - ENDPOINT_CLASS1
          - ENDPOINT_CLASS2
          - ENDPOINT_CLASS3
          - NETWORK_CONNECTIVITY
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power:
      type: object
      properties:
        openconfig-lldp-ext:extended-mdi-power:
          type: object
          properties:
            device-type:
              enum:
              - PSE
              - PD
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            pd-power-source:
              enum:
              - UNKNOWN
              - PSE
              - LOCAL
              - LOCAL_AND_PSE
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            pse-power-source:
              enum:
              - UNKNOWN
              - PRIMARY
              - BACKUP
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-priority:
              enum:
              - UNKNOWN
              - CRITICAL
              - HIGH
              - LOW
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            power-value:
              format: int32
              maximum: 65535
              minimum: 0
              type: integer
              x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_device_type:
      type: object
      properties:
        openconfig-lldp-ext:device-type:
          enum:
          - PSE
          - PD
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pd_power_source:
      type: object
      properties:
        openconfig-lldp-ext:pd-power-source:
          enum:
          - UNKNOWN
          - PSE
          - LOCAL
          - LOCAL_AND_PSE
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_pse_power_source:
      type: object
      properties:
        openconfig-lldp-ext:pse-power-source:
          enum:
          - UNKNOWN
          - PRIMARY
          - BACKUP
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_priority:
      type: object
      properties:
        openconfig-lldp-ext:power-priority:
          enum:
          - UNKNOWN
          - CRITICAL
          - HIGH
          - LOW
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_extended_mdi_power_power_value:
      type: object
      properties:
        openconfig-lldp-ext:power-value:
          format: int32
          maximum: 65535
          minimum: 0
          type: integer
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory:
      type: object
      properties:
        openconfig-lldp-ext:inventory:
          type: object
          properties:
            hardware-revision:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            firmware-revision:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            software-revision:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            serial-number:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            manufacturer:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            model:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            asset-id:
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_hardware_revision:
      type: object
      properties:
        openconfig-lldp-ext:hardware-revision:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_firmware_revision:
      type: object
      properties:
        openconfig-lldp-ext:firmware-revision:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_software_revision:
      type: object
      properties:
        openconfig-lldp-ext:software-revision:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_serial_number:
      type: object
      properties:
        openconfig-lldp-ext:serial-number:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_manufacturer:
      type: object
      properties:
        openconfig-lldp-ext:manufacturer:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_model:
      type: object
      properties:
        openconfig-lldp-ext:model:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_state_inventory_asset_id:
      type: object
      properties:
        openconfig-lldp-ext:asset-id:
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies:
      type: object
      properties:
        openconfig-lldp-ext:network-policies:
          type: object
          properties:
            network-policy:
              type: array
              items:
                type: object
                required:
                - type
                properties:
                  type:
                    enum:
                    - VOICE
                    - VOICE_SIGNALING
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  state:
                    type: object
                    properties:
                      type:
                        enum:
                        - VOICE
                        - VOICE_SIGNALING
                        maxLength: 18446744073709551615
                        minLength: 0
                        type: string
                        x-yang-type: string
                      vlan-id:
                        format: int32
                        maximum: 4094
                        minimum: 0
                        type: integer
                        x-range: 0..4094
                        x-yang-type: uint16
                      tagged:
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
                      priority:
                        format: int32
                        maximum: 7
                        minimum: 0
                        type: integer
                        x-range: 0..7
                        x-yang-type: uint8
                      dscp:
                        format: int32
                        maximum: 63
                        minimum: 0
                        type: integer
                        x-range: 0..63
                        x-yang-type: uint8
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy:
      type: object
      properties:
        openconfig-lldp-ext:network-policy:
          type: array
          items:
            type: object
            required:
            - type
            properties:
              type:
                enum:
                - VOICE
                - VOICE_SIGNALING
                maxLength: 18446744073709551615
                minLength: 0
                type: string
                x-yang-type: string
              state:
                type: object
                properties:
                  type:
                    enum:
                    - VOICE
                    - VOICE_SIGNALING
                    maxLength: 18446744073709551615
                    minLength: 0
                    type: string
                    x-yang-type: string
                  vlan-id:
                    format: int32
                    maximum: 4094
                    minimum: 0
                    type: integer
                    x-range: 0..4094
                    x-yang-type: uint16
                  tagged:
                    format: boolean
                    type: boolean
                    x-yang-type: boolean
                  priority:
                    format: int32
                    maximum: 7
                    minimum: 0
                    type: integer
                    x-range: 0..7
                    x-yang-type: uint8
                  dscp:
                    format: int32
                    maximum: 63
                    minimum: 0
                    type: integer
                    x-range: 0..63
                    x-yang-type: uint8
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_type:
      type: object
      properties:
        openconfig-lldp-ext:type:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state:
      type: object
      properties:
        openconfig-lldp-ext:state:
          type: object
          properties:
            type:
              enum:
              - VOICE
              - VOICE_SIGNALING
              maxLength: 18446744073709551615
              minLength: 0
              type: string
              x-yang-type: string
            vlan-id:
              format: int32
              maximum: 4094
              minimum: 0
              type: integer
              x-range: 0..4094
              x-yang-type: uint16
            tagged:
              format: boolean
              type: boolean
              x-yang-type: boolean
            priority:
              format: int32
              maximum: 7
              minimum: 0
              type: integer
              x-range: 0..7
              x-yang-type: uint8
            dscp:
              format: int32
              maximum: 63
              minimum: 0
              type: integer
              x-range: 0..63
              x-yang-type: uint8
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_type:
      type: object
      properties:
        openconfig-lldp-ext:type:
          enum:
          - VOICE
          - VOICE_SIGNALING
          maxLength: 18446744073709551615
          minLength: 0
          type: string
          x-yang-type: string
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_vlan_id:
      type: object
      properties:
        openconfig-lldp-ext:vlan-id:
          format: int32
          maximum: 4094
          minimum: 0
          type: integer
          x-range: 0..4094
          x-yang-type: uint16
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_tagged:
      type: object
      properties:
        openconfig-lldp-ext:tagged:
          format: boolean
          type: boolean
          x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_priority:
      type: object
      properties:
        openconfig-lldp-ext:priority:
          format: int32
          maximum: 7
          minimum: 0
          type: integer
          x-range: 0..7
          x-yang-type: uint8
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_network_policies_network_policy_state_dscp:
      type: object
      properties:
        openconfig-lldp-ext:dscp:
          format: int32
          maximum: 63
          minimum: 0
          type: integer
          x-range: 0..63
          x-yang-type: uint8
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities:
      type: object
      properties:
        openconfig-lldp-ext:capabilities:
          type: object
          properties:
            capability:
              type: array
              items:
                type: object
                required:
                - name
                properties:
                  name:
                    enum:
                    - NETWORK_POLICY
                    - EXT_MDI_POWER_PSE
                    - LOCATION_ID
                    - EXT_MDI_POWER_PD
                    - INVENTORY
                    format: string
                    type: string
                    x-yang-type: identityref
                  state:
                    type: object
                    properties:
                      name:
                        enum:
                        - NETWORK_POLICY
                        - EXT_MDI_POWER_PSE
                        - LOCATION_ID
                        - EXT_MDI_POWER_PD
                        - INVENTORY
                        format: string
                        type: string
                        x-yang-type: identityref
                      enabled:
                        format: boolean
                        type: boolean
                        x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability:
      type: object
      properties:
        openconfig-lldp-ext:capability:
          type: array
          items:
            type: object
            required:
            - name
            properties:
              name:
                enum:
                - NETWORK_POLICY
                - EXT_MDI_POWER_PSE
                - LOCATION_ID
                - EXT_MDI_POWER_PD
                - INVENTORY
                format: string
                type: string
                x-yang-type: identityref
              state:
                type: object
                properties:
                  name:
                    enum:
                    - NETWORK_POLICY
                    - EXT_MDI_POWER_PSE
                    - LOCATION_ID
                    - EXT_MDI_POWER_PD
                    - INVENTORY
                    format: string
                    type: string
                    x-yang-type: identityref
                  enabled:
                    format: boolean
                    type: boolean
                    x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_name:
      type: object
      properties:
        openconfig-lldp-ext:name:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state:
      type: object
      properties:
        openconfig-lldp-ext:state:
          type: object
          properties:
            name:
              enum:
              - NETWORK_POLICY
              - EXT_MDI_POWER_PSE
              - LOCATION_ID
              - EXT_MDI_POWER_PD
              - INVENTORY
              format: string
              type: string
              x-yang-type: identityref
            enabled:
              format: boolean
              type: boolean
              x-yang-type: boolean
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_name:
      type: object
      properties:
        openconfig-lldp-ext:name:
          enum:
          - NETWORK_POLICY
          - EXT_MDI_POWER_PSE
          - LOCATION_ID
          - EXT_MDI_POWER_PD
          - INVENTORY
          format: string
          type: string
          x-yang-type: identityref
    get_openconfig_lldp_ext_lldp_interfaces_interface_neighbors_neighbor_med_capabilities_capability_state_enabled:
      type: object
      properties:
        openconfig-lldp-ext:enabled:
          format: boolean
          type: boolean
          x-yang-type: boolean