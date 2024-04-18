/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

const __nodeFs= require('node:fs')
const __nodePath = require('node:path')
const { WASI: __nodeWASI } = require('node:wasi')
const { Worker } = require('node:worker_threads')

const {
  instantiateNapiModuleSync: __emnapiInstantiateNapiModuleSync,
  getDefaultContext: __emnapiGetDefaultContext,
} = require('@napi-rs/wasm-runtime')

const __wasi = new __nodeWASI({
  version: 'preview1',
  env: process.env,
  preopens: {
    '/': '/'
  }
})

const __emnapiContext = __emnapiGetDefaultContext()

const __sharedMemory = new WebAssembly.Memory({
  initial: 4000,
  maximum: 65536,
  shared: true,
})

let __wasmFilePath = __nodePath.join(__dirname, 'nx.wasm32-wasi.wasm')
const __wasmDebugFilePath = __nodePath.join(__dirname, 'nx.wasm32-wasi.debug.wasm')

if (__nodeFs.existsSync(__wasmDebugFilePath)) {
  __wasmFilePath = __wasmDebugFilePath
} else if (!__nodeFs.existsSync(__wasmFilePath)) {
  try {
    __wasmFilePath = __nodePath.resolve('@nx/nx-wasm32-wasi')
  } catch {
    throw new Error('Cannot find nx.wasm32-wasi.wasm file, and @nx/nx-wasm32-wasi package is not installed.')
  }
}

const { instance: __napiInstance, module: __wasiModule, napiModule: __napiModule } = __emnapiInstantiateNapiModuleSync(__nodeFs.readFileSync(__wasmFilePath), {
  context: __emnapiContext,
  asyncWorkPoolSize: (function() {
    const threadsSizeFromEnv = Number(process.env.NAPI_RS_ASYNC_WORK_POOL_SIZE ?? process.env.UV_THREADPOOL_SIZE)
    // NaN > 0 is false
    if (threadsSizeFromEnv > 0) {
      return threadsSizeFromEnv
    } else {
      return 4
    }
  })(),
  wasi: __wasi,
  onCreateWorker() {
    return new Worker(__nodePath.join(__dirname, 'wasi-worker.mjs'), {
      env: process.env,
      execArgv: ['--experimental-wasi-unstable-preview1'],
    })
  },
  overwriteImports(importObject) {
    importObject.env = {
      ...importObject.env,
      ...importObject.napi,
      ...importObject.emnapi,
      memory: __sharedMemory,
    }
    return importObject
  },
  beforeInit({ instance }) {
    __napi_rs_initialize_modules(instance)
  }
})

function __napi_rs_initialize_modules(__napiInstance) {
  __napiInstance.exports['__napi_register__expand_outputs_0']?.()
  __napiInstance.exports['__napi_register__get_files_for_outputs_1']?.()
  __napiInstance.exports['__napi_register__remove_2']?.()
  __napiInstance.exports['__napi_register__copy_3']?.()
  __napiInstance.exports['__napi_register__hash_array_4']?.()
  __napiInstance.exports['__napi_register__hash_file_5']?.()
  __napiInstance.exports['__napi_register__ImportResult_struct_6']?.()
  __napiInstance.exports['__napi_register__find_imports_7']?.()
  __napiInstance.exports['__napi_register__transfer_project_graph_8']?.()
  __napiInstance.exports['__napi_register__ExternalNodeData_struct_9']?.()
  __napiInstance.exports['__napi_register__ExternalNode_struct_10']?.()
  __napiInstance.exports['__napi_register__Target_struct_11']?.()
  __napiInstance.exports['__napi_register__Project_struct_12']?.()
  __napiInstance.exports['__napi_register__ProjectGraph_struct_13']?.()
  __napiInstance.exports['__napi_register__HashPlanner_struct_14']?.()
  __napiInstance.exports['__napi_register__HashPlanner_impl_18']?.()
  __napiInstance.exports['__napi_register__HashDetails_struct_19']?.()
  __napiInstance.exports['__napi_register__HasherOptions_struct_20']?.()
  __napiInstance.exports['__napi_register__TaskHasher_struct_21']?.()
  __napiInstance.exports['__napi_register__TaskHasher_impl_24']?.()
  __napiInstance.exports['__napi_register__Task_struct_25']?.()
  __napiInstance.exports['__napi_register__TaskTarget_struct_26']?.()
  __napiInstance.exports['__napi_register__TaskGraph_struct_27']?.()
  __napiInstance.exports['__napi_register__FileData_struct_28']?.()
  __napiInstance.exports['__napi_register__InputsInput_struct_29']?.()
  __napiInstance.exports['__napi_register__FileSetInput_struct_30']?.()
  __napiInstance.exports['__napi_register__RuntimeInput_struct_31']?.()
  __napiInstance.exports['__napi_register__EnvironmentInput_struct_32']?.()
  __napiInstance.exports['__napi_register__ExternalDependenciesInput_struct_33']?.()
  __napiInstance.exports['__napi_register__DepsOutputsInput_struct_34']?.()
  __napiInstance.exports['__napi_register__NxJson_struct_35']?.()
  __napiInstance.exports['__napi_register__WorkspaceContext_struct_36']?.()
  __napiInstance.exports['__napi_register__WorkspaceContext_impl_45']?.()
  __napiInstance.exports['__napi_register__WorkspaceErrors_46']?.()
  __napiInstance.exports['__napi_register__NxWorkspaceFiles_struct_47']?.()
  __napiInstance.exports['__napi_register__NxWorkspaceFilesExternals_struct_48']?.()
  __napiInstance.exports['__napi_register__UpdatedWorkspaceFiles_struct_49']?.()
  __napiInstance.exports['__napi_register__FileMap_struct_50']?.()
  __napiInstance.exports['__napi_register____test_only_transfer_file_map_51']?.()
}
module.exports.HashPlanner = __napiModule.exports.HashPlanner
module.exports.ImportResult = __napiModule.exports.ImportResult
module.exports.TaskHasher = __napiModule.exports.TaskHasher
module.exports.WorkspaceContext = __napiModule.exports.WorkspaceContext
module.exports.copy = __napiModule.exports.copy
module.exports.expandOutputs = __napiModule.exports.expandOutputs
module.exports.findImports = __napiModule.exports.findImports
module.exports.getFilesForOutputs = __napiModule.exports.getFilesForOutputs
module.exports.hashArray = __napiModule.exports.hashArray
module.exports.hashFile = __napiModule.exports.hashFile
module.exports.remove = __napiModule.exports.remove
module.exports.testOnlyTransferFileMap = __napiModule.exports.testOnlyTransferFileMap
module.exports.transferProjectGraph = __napiModule.exports.transferProjectGraph
module.exports.WorkspaceErrors = __napiModule.exports.WorkspaceErrors
