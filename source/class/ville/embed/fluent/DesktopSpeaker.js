/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopSpeaker",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.65 1.2c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-3.96-.16c.19.08.31.26.31.46v6a.5.5 0 0 1-.85.35L11.29 6h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm2.53 1.93c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.59 4.59 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53ZM17 13V8.98c.34.06.7 0 1-.18V13a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6.88-.38c-.65 0-1.2.42-1.41 1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1Zm-5 2H8v2h4v-2Z",
    FILLED : "M17.65 1.2c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-3.96-.16c.19.08.31.26.31.46v6a.5.5 0 0 1-.85.35L11.29 6h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm2.53 1.93c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.59 4.59 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53Zm.13 5.73a1.5 1.5 0 0 1-.53-.74 1.5 1.5 0 0 1-.87-.07 1.5 1.5 0 0 1-2.51.67L10.88 7h-.38A1.5 1.5 0 0 1 9 5.5v-2c0-.83.67-1.5 1.5-1.5h.38H3.5C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3.5c.83 0 1.5-.67 1.5-1.5V8.8c-.5.29-1.15.27-1.65-.1ZM12 15v2H8v-2h4Z"
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