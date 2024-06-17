/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Cellular3g",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.03 3c-.32 0-.74.14-1.16.6a.5.5 0 1 1-.74-.66A2.57 2.57 0 0 1 4.03 2c.64 0 1.2.28 1.57.7A1.5 1.5 0 0 1 5.28 5c.27.2.47.42.6.69.26.59.08 1.2-.28 1.61-.36.42-.93.7-1.56.7-.65 0-1.33-.29-1.91-.94a.5.5 0 0 1 .74-.66c.42.46.84.6 1.17.6.34 0 .63-.15.8-.35.17-.2.2-.4.12-.55-.07-.17-.33-.44-1.07-.61a.5.5 0 0 1 0-.98c.74-.17 1-.44 1.07-.61.07-.15.05-.35-.12-.55-.17-.2-.46-.35-.8-.35ZM16.5 5a.5.5 0 0 1 .5.41v11.1a.5.5 0 0 1-.99.08V5.5c0-.28.22-.5.5-.5Zm-9 6a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V11.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V13.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V9.5c0-.28.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V7.5c0-.27.22-.5.5-.5ZM9.25 3h.25s.13 0 .28.06c.17.07.36.18.48.42a.5.5 0 0 0 .89-.46C10.62 2 9.53 2 9.5 2h-.25C8.01 2 7 3 7 4.25v1.5a2.25 2.25 0 0 0 4.5 0v-.5a.5.5 0 0 0-.5-.5H9.5a.5.5 0 1 0 0 1h1a1.25 1.25 0 0 1-2.5 0v-1.5C8 3.56 8.56 3 9.25 3Z",
    FILLED : "M4.03 3c-.32 0-.74.14-1.16.6a.5.5 0 1 1-.74-.66A2.57 2.57 0 0 1 4.03 2c.64 0 1.2.28 1.57.7A1.5 1.5 0 0 1 5.28 5c.27.2.47.42.6.69.26.59.08 1.2-.28 1.61-.36.42-.93.7-1.56.7-.65 0-1.33-.29-1.91-.94a.5.5 0 0 1 .74-.66c.42.46.84.6 1.17.6.34 0 .63-.15.8-.35.17-.2.2-.4.12-.55-.07-.17-.33-.44-1.07-.61a.5.5 0 0 1 0-.98c.74-.17 1-.44 1.07-.61.07-.15.05-.35-.12-.55-.17-.2-.46-.35-.8-.35Zm.72 10c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V9.75c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 0 1-1.5.11V7.75c0-.41.34-.75.75-.75Zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 0 1-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75Zm-7.5-2h.25s.13 0 .28.06c.17.07.36.18.48.42a.5.5 0 0 0 .89-.46C10.62 2 9.53 2 9.5 2h-.25C8.01 2 7 3 7 4.25v1.5a2.25 2.25 0 0 0 4.5 0v-.5a.5.5 0 0 0-.5-.5H9.5a.5.5 0 1 0 0 1h1a1.25 1.25 0 0 1-2.5 0v-1.5C8 3.56 8.56 3 9.25 3Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});