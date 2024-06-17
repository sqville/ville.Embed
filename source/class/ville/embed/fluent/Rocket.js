/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Rocket",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.76 6.43a2 2 0 1 1 2.82 2.82 2 2 0 0 1-2.82-2.82Zm2.11.7a1 1 0 1 0-1.4 1.42 1 1 0 0 0 1.4-1.42Zm-1.12 7.37a1.5 1.5 0 0 1-1.7-.3l-.61-.6-.74 1.22a.5.5 0 0 1-.78.1L5.1 12.09a.5.5 0 0 1 .1-.79l1.22-.73-.61-.6a1.5 1.5 0 0 1-.3-1.71L4.38 7.14a.5.5 0 0 1 0-.7l1.06-1.07a3 3 0 0 1 3.42-.59l.93-.93a6.3 6.3 0 0 1 6.33-1.56c.76.24 1.36.83 1.6 1.6a6.3 6.3 0 0 1-1.56 6.32l-.94.94a3 3 0 0 1-.58 3.41l-1.06 1.06a.5.5 0 0 1-.71 0l-1.12-1.12Zm4.08-11.26a5.3 5.3 0 0 0-5.33 1.31l-.81.82-.7.7h-.01L6.86 8.2l-.4.4a.5.5 0 0 0 .05.66l4.24 4.24c.18.18.46.2.66.05l.4-.4 2.12-2.12.7-.71.82-.81a5.3 5.3 0 0 0 1.31-5.33c-.14-.45-.49-.8-.93-.94Zm-3.31 10.62.7.7.7-.7a2 2 0 0 0 .53-1.93l-1.93 1.93Zm-4.44-8.3a2 2 0 0 0-1.93.52l-.7.7.7.71 1.93-1.93Zm.63 7.31L7.14 11.3l-.89.53 1.93 1.93.53-.89Zm-2.9 2.04a.5.5 0 1 0-.71-.7l-1.77 1.76a.5.5 0 1 0 .7.71l1.77-1.77ZM4.38 12.8c.2.2.2.51 0 .7l-.71.72a.5.5 0 0 1-.7-.71l.7-.71c.2-.2.51-.2.7 0Zm2.83 3.54a.5.5 0 0 0-.7-.71l-.72.7a.5.5 0 1 0 .7.72l.72-.71Z",
    FILLED : "M10.76 6.43a2 2 0 1 1 2.82 2.82 2 2 0 0 1-2.82-2.82Zm2.11.7a1 1 0 1 0-1.4 1.41 1 1 0 0 0 1.4-1.4ZM9.44 13.6l.6.6a1.5 1.5 0 0 0 1.71.3l1.12 1.12c.2.2.51.2.7 0L15 14.2c.86-.86.96-2.17.31-3.14l.85-.85a6.3 6.3 0 0 0 1.56-6.33 2.43 2.43 0 0 0-1.6-1.6A6.3 6.3 0 0 0 9.8 3.86l-.85.85A2.5 2.5 0 0 0 5.8 5L4.38 6.43a.5.5 0 0 0 0 .7L5.5 8.27a1.5 1.5 0 0 0 .3 1.7l.6.61-1.21.73a.5.5 0 0 0-.1.78l2.83 2.83a.5.5 0 0 0 .79-.1l.73-1.21Zm7.32-9.42a5.3 5.3 0 0 1-1.3 5.33l-4 4a.5.5 0 0 1-.7 0l-1.07-1.07-2.12-2.12L6.5 9.24a.5.5 0 0 1 0-.7l3.99-4a5.3 5.3 0 0 1 5.33-1.3c.44.13.8.48.93.93ZM5.8 14.91a.5.5 0 0 0-.7-.7l-1.77 1.76a.5.5 0 1 0 .7.7l1.77-1.76ZM4.4 12.79c.2.2.2.5 0 .7l-.7.71a.5.5 0 1 1-.72-.7l.71-.71c.2-.2.51-.2.71 0Zm2.83 3.53a.5.5 0 1 0-.7-.7l-.72.7a.5.5 0 1 0 .71.71l.71-.7Z"
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